import React, { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, ArrowRight, Train, ChevronRight, Info, Clock, Navigation, ArrowLeft, RefreshCw, CheckCircle2, Share2, X, Map as MapIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_STATIONS, METRO_LINES, Line } from './data/metroData';
import { findRoutes, RouteResult, RouteStep } from './data/routing';
import { findTransferDetail, TransferInfo } from './data/transferData';

// --- Helper ---
function getLineDirection(lineId: string, from: string, to: string): string {
  const line = METRO_LINES.find(l => l.id === lineId);
  if (!line) return '';
  const fromIdx = line.stations.indexOf(from);
  const toIdx = line.stations.indexOf(to);
  if (fromIdx === -1 || toIdx === -1) return '';
  
  if (toIdx > fromIdx) {
    return line.stations[line.stations.length - 1];
  } else {
    return line.stations[0];
  }
}

// --- Components ---

const StationPicker = ({ 
  label, 
  value, 
  onStationChange, 
  placeholder 
}: { 
  label: string; 
  value: string; 
  onStationChange: (val: string) => void; 
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredStations = useMemo(() => {
    if (!search) return [];
    const lowerSearch = search.toLowerCase();
    return ALL_STATIONS.filter(s => s.name.toLowerCase().includes(lowerSearch)).slice(0, 8);
  }, [search]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 mb-4 relative">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
          <MapPin className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">{label}</p>
          <div className="flex items-center">
            <input
              type="text"
              className="w-full text-lg font-bold text-stone-800 focus:outline-none placeholder:text-stone-300 bg-transparent"
              placeholder={placeholder}
              value={value || search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsOpen(true);
                if (value) onStationChange('');
              }}
              onFocus={() => setIsOpen(true)}
            />
            {(value || search) && (
              <button 
                onClick={() => { setSearch(''); onStationChange(''); }}
                className="p-1 text-stone-300 hover:text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && filteredStations.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 z-50 overflow-hidden max-h-64 overflow-y-auto no-scrollbar"
          >
            {filteredStations.map(s => (
              <button
                key={s.id}
                onClick={() => {
                  onStationChange(s.name);
                  setSearch('');
                  setIsOpen(false);
                }}
                className="w-full text-left p-4 hover:bg-stone-50 transition-colors flex items-center justify-between border-b border-stone-50 last:border-0"
              >
                <span className="font-bold text-stone-700">{s.name}</span>
                <div className="flex gap-1">
                  {s.lines.map(lId => (
                    <div 
                      key={lId} 
                      className="w-3.5 h-3.5 rounded-full border border-white shadow-sm" 
                      style={{ backgroundColor: METRO_LINES.find(l => l.id === lId)?.color }}
                    />
                  ))}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const RouteCard: React.FC<{ route: RouteResult, onClick: () => void, isBest?: boolean }> = ({ route, onClick, isBest }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="w-full bg-white rounded-3xl p-5 shadow-sm border border-black/5 text-left mb-4 relative overflow-hidden btn-active"
    >
      {isBest && (
        <div className="absolute top-0 right-0">
          <div className="bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
            最优推荐
          </div>
        </div>
      )}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-stone-400" />
          <p className="text-xs text-stone-400 font-bold">{route.totalStops} 站 · {route.transfers} 次换乘</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-y-3">
        {route.steps.map((step, idx) => {
          const line = METRO_LINES.find(l => l.id === step.lineId);
          const lineShortName = line?.name.split(' ')[0];
          
          if (step.type === 'transfer') {
            return (
              <div key={idx} className="flex items-center">
                <ChevronRight className="w-3 h-3 text-stone-300 mx-1" />
                <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 rounded-lg border border-amber-100">
                  <div className="w-3 h-3 rounded-full bg-amber-500 flex items-center justify-center">
                    <span className="text-[7px] text-white font-black">换</span>
                  </div>
                  <span className="text-[10px] font-black text-amber-700 leading-none">{step.from}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-stone-300 mx-1" />
              </div>
            );
          }

          const isFirst = idx === 0;
          const isLast = idx === route.steps.length - 1;

          return (
            <React.Fragment key={idx}>
              {isFirst && (
                <span className="text-sm font-black text-stone-900 mr-2">{step.from}</span>
              )}
              
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg shadow-sm border" style={{ backgroundColor: `${line?.color}10`, borderColor: `${line?.color}30` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: line?.color }} />
                <span className="text-[10px] font-black" style={{ color: line?.color }}>{lineShortName}</span>
              </div>

              {isLast && (
                <>
                  <ChevronRight className="w-3 h-3 text-stone-300 mx-1" />
                  <span className="text-sm font-black text-stone-900">{step.to}</span>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.button>
  );
};

const DetailPage = ({ route, onBack }: { route: RouteResult, onBack: () => void }) => {
  return (
    <div className="page-container bg-stone-50">
      <div className="wechat-nav border-b border-stone-100 bg-white">
        <button onClick={onBack} className="absolute left-4 p-2 btn-active">
          <ArrowLeft className="w-5 h-5 text-stone-800" />
        </button>
        <span>换乘详情</span>
        <button className="absolute right-4 p-2 btn-active">
          <Share2 className="w-5 h-5 text-stone-800" />
        </button>
      </div>

      <div className="content-scroll p-6">
        {route.transfers === 0 && (
          <div className="bg-white rounded-3xl p-8 text-center mb-8 border border-stone-100">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-stone-800 mb-2">直达路线</h2>
            <p className="text-stone-500 text-sm">本路线无需换乘，请直接乘坐 {METRO_LINES.find(l => l.id === route.steps[0].lineId)?.name}</p>
          </div>
        )}

        {route.steps.map((step, idx) => {
          if (step.type === 'ride') {
            const line = METRO_LINES.find(l => l.id === step.lineId);
            const direction = getLineDirection(step.lineId, step.from, step.to);
            const nextStep = route.steps[idx + 1];
            const isTransfer = nextStep?.type === 'transfer';
            
            let transferDetail: TransferInfo | undefined;
            let targetLine: Line | undefined;

            if (isTransfer) {
              const targetRideStep = route.steps[idx + 2];
              if (targetRideStep && targetRideStep.type === 'ride') {
                const targetLineId = targetRideStep.lineId;
                targetLine = METRO_LINES.find(l => l.id === targetLineId);
                const targetDirection = getLineDirection(targetLineId, targetRideStep.from, targetRideStep.to);
                transferDetail = findTransferDetail(step.lineId, direction, nextStep.from, targetLineId, targetDirection);
              }
            }

            const headCar = transferDetail?.notes.match(/(\d+)号车为车头/)?.[1];
            const linesWith8Cars = ['10', '11', '13', '14', '20'];
            const totalCars = linesWith8Cars.includes(step.lineId) ? 8 : 6;

            return (
              <div key={idx} className="relative pl-10">
                <div 
                  className="absolute left-[11px] top-6 bottom-0 w-1 rounded-full" 
                  style={{ backgroundColor: line?.color }} 
                />
                
                <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-white border-4 flex items-center justify-center shadow-sm z-10" style={{ borderColor: line?.color }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: line?.color }} />
                </div>

                <div className="space-y-6 pb-12">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-black text-stone-900">{step.from}</h3>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: line?.color }}>{line?.name.split(' ')[0]}</span>
                    </div>
                    <p className="text-stone-500 text-xs font-medium">
                      乘坐 <span className="text-stone-800 font-bold">{line?.name}</span> 往 <span className="text-stone-800 font-bold">{direction}</span>
                    </p>
                    <div className="mt-2 flex flex-col gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const el = e.currentTarget.nextElementSibling;
                          if (el) el.classList.toggle('hidden');
                        }}
                        className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase tracking-widest hover:bg-emerald-50 w-fit px-2 py-1 rounded-lg transition-colors"
                      >
                        <Navigation className="w-3 h-3" /> {step.stops.length} 站 (点击查看详情)
                      </button>
                      <div className="hidden pl-4 border-l border-stone-100 space-y-2 mt-2">
                        {step.stops.map((stop, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-stone-300" />
                            <span className="text-[10px] text-stone-500 font-medium">{stop}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {isTransfer && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-3xl p-5 border border-stone-100 shadow-xl shadow-stone-200/40 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-50 p-2 rounded-xl">
                            <RefreshCw className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-xs font-black text-stone-900">换乘：{nextStep.from}</p>
                            <p className="text-[10px] text-stone-400 font-medium">换乘至 {targetLine?.name.split(' ')[0]}</p>
                          </div>
                        </div>
                        <div className="text-right flex items-center gap-2">
                          {transferDetail?.time && (
                            <span className="flex items-center gap-1 text-[9px] font-bold text-stone-400">
                              <Clock className="w-2.5 h-2.5" /> {transferDetail.time}
                            </span>
                          )}
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-black rounded uppercase">
                            {transferDetail?.method || '节点'}换乘
                          </span>
                        </div>
                      </div>

                      {transferDetail ? (
                        <div className="space-y-5">
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-stone-50 rounded-xl p-2 text-center">
                              <p className="text-[8px] font-black text-stone-400 uppercase mb-0.5">车厢</p>
                              <div className="text-sm font-black text-stone-900 font-mono">
                                {transferDetail.cars.map(c => c === 'ANY' ? '任意' : c).join(', ')}
                              </div>
                            </div>
                            <div className="bg-stone-50 rounded-xl p-2 text-center">
                              <p className="text-[8px] font-black text-stone-400 uppercase mb-0.5">车门</p>
                              <div className="text-sm font-black text-stone-900 font-mono">
                                {transferDetail.doors.map(d => d === 'ANY' ? '任意' : d).join(', ')}
                              </div>
                            </div>
                            <div className="bg-stone-50 rounded-xl p-2 text-center">
                              <p className="text-[8px] font-black text-stone-400 uppercase mb-0.5">开门</p>
                              <p className="text-sm font-black text-stone-900">{transferDetail.doorSide}</p>
                            </div>
                          </div>

                          <div className="relative pt-6 pb-2">
                            {headCar && (
                              <div className="absolute top-0 flex flex-row items-center gap-1 whitespace-nowrap" style={{ left: `${(Number(headCar) - 1) * (100 / totalCars) + (50 / totalCars)}%`, transform: 'translateX(-50%)' }}>
                                <ArrowRight className={`w-2.5 h-2.5 text-stone-400 ${Number(headCar) === 1 ? '-rotate-180' : ''}`} />
                                <span className="text-[6px] font-black text-stone-400 uppercase">车头</span>
                              </div>
                            )}
                            <div className="flex gap-1 h-6">
                              {Array.from({ length: totalCars }, (_, i) => i + 1).map(i => {
                                const isRecommended = transferDetail!.cars.some(c => {
                                  if (c === 'ANY') return true;
                                  if (c.includes('-')) {
                                    const [start, end] = c.split('-').map(Number);
                                    return i >= start && i <= end;
                                  }
                                  return Number(c) === i;
                                });
                                return (
                                  <div 
                                    key={i} 
                                    className={`flex-1 rounded-md border transition-all flex items-center justify-center text-[8px] font-black ${
                                      isRecommended 
                                        ? 'bg-emerald-500 border-emerald-600 text-white shadow-sm' 
                                        : 'bg-white border-stone-100 text-stone-300'
                                    }`}
                                  >
                                    {i}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="flex items-start gap-2 bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
                            <Info className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-[10px] text-amber-800 font-medium leading-relaxed">{transferDetail.notes}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-4 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                          <p className="text-[10px] text-stone-400 font-medium">暂无详细换乘数据</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {!isTransfer && idx === route.steps.length - 1 && (
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-black text-stone-900">到达 {step.to}</h3>
                    </div>
                  )}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [routes, setRoutes] = useState<RouteResult[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<RouteResult | null>(null);
  const [isPlanning, setIsPlanning] = useState(false);

  const handlePlan = () => {
    if (!startStation || !endStation) return;
    const results = findRoutes(startStation, endStation);
    setRoutes(results);
    setIsPlanning(true);
  };

  if (selectedRoute) {
    return (
      <DetailPage 
        route={selectedRoute} 
        onBack={() => setSelectedRoute(null)} 
      />
    );
  }

  return (
    <div className="page-container">
      {/* Custom Nav Bar */}
      <div className="wechat-nav border-b border-stone-100 bg-white">
        <span>深铁精指</span>
      </div>

      <div className="content-scroll no-scrollbar">
        {activeTab === 'home' ? (
          <div className="p-6">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <h1 className="text-2xl font-black tracking-tight text-stone-900">换乘指引</h1>
              </div>
              <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">Shenzhen Metro Precise Guide</p>
            </header>

            {/* Input Section */}
            <div className="relative">
              <StationPicker
                label="起点站"
                placeholder="您从哪儿出发？"
                value={startStation}
                onStationChange={setStartStation}
              />

              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                 <button 
                  onClick={() => {
                    const tempS = startStation;
                    setStartStation(endStation);
                    setEndStation(tempS);
                  }}
                  className="w-9 h-9 rounded-full bg-white shadow-lg border border-stone-100 flex items-center justify-center btn-active"
                 >
                   <RefreshCw className="w-4 h-4 text-stone-400" />
                 </button>
              </div>

              <StationPicker
                label="终点站"
                placeholder="您要去哪儿？"
                value={endStation}
                onStationChange={setEndStation}
              />

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handlePlan}
                disabled={!startStation || !endStation}
                className="w-full bg-stone-900 text-white py-4 rounded-2xl font-bold text-base shadow-xl shadow-stone-200 disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2 btn-active"
              >
                开始规划 <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Results Section */}
            <AnimatePresence>
              {isPlanning && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10"
                >
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-widest">推荐路线</h2>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">实时计算</span>
                  </div>
                  
                  {routes.length > 0 ? (
                    routes.map((r, i) => (
                      <RouteCard key={`${r.score}-${i}`} route={r} isBest={i === 0} onClick={() => setSelectedRoute(r)} />
                    ))
                  ) : (
                    <div className="text-center py-10 bg-white rounded-3xl border border-dashed border-stone-200">
                      <Info className="w-6 h-6 text-stone-300 mx-auto mb-2" />
                      <p className="text-xs text-stone-400 font-medium">未找到可用路线</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <footer className="mt-12 mb-8 text-center">
              <p className="text-[10px] font-bold text-stone-300 uppercase tracking-[0.2em]">Powered by Hish Yu 2026</p>
            </footer>
          </div>
        ) : activeTab === 'map' ? (
          <div className="h-full w-full overflow-auto touch-pan-x touch-pan-y bg-stone-100 flex items-start justify-start p-2">
            <div className="min-w-max min-h-max">
              <img 
                src="https://imgbdb4.bendibao.com/szbdb/jt/202512/29/20251229110052_56398.png" 
                alt="深圳地铁线路图"
                className="max-w-none w-[1200px] shadow-2xl rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="p-10 text-center text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                左右滑动查看完整线路图
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center py-20">
            <Search className="w-12 h-12 text-stone-200 mx-auto mb-4" />
            <h2 className="text-lg font-bold text-stone-800 mb-2">查询功能</h2>
            <p className="text-stone-400 text-sm">更多功能正在开发中...</p>
          </div>
        )}
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-stone-100 px-8 py-3 pb-8 flex justify-around items-center z-50">
        <button 
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-emerald-600' : 'text-stone-400'}`}
        >
          <Navigation className="w-5 h-5" />
          <span className="text-[10px] font-bold">规划</span>
        </button>
        <button 
          onClick={() => setActiveTab('map')}
          className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'map' ? 'text-emerald-600' : 'text-stone-400'}`}
        >
          <div className={`w-5 h-5 rounded-sm overflow-hidden border ${activeTab === 'map' ? 'border-emerald-500' : 'border-stone-200'}`}>
            <img 
              src="https://imgbdb4.bendibao.com/szbdb/jt/202512/29/20251229110052_56398.png" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <span className="text-[10px] font-bold">线路图</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-stone-400">
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-bold">查询</span>
        </button>
      </div>
    </div>
  );
}
