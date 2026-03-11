import React, { useState, useMemo } from 'react';
import { Search, MapPin, ArrowRight, Train, ChevronRight, Info, Clock, Navigation, ArrowLeft, RefreshCw, CheckCircle2 } from 'lucide-react';
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
    return ALL_STATIONS.filter(s => s.name.toLowerCase().includes(lowerSearch)).slice(0, 5);
  }, [search]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
          <MapPin className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">{label}</p>
          <input
            type="text"
            className="w-full text-lg font-semibold text-stone-800 focus:outline-none placeholder:text-stone-300"
            placeholder={placeholder}
            value={value || search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
              if (value) onStationChange('');
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && filteredStations.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-2 space-y-1"
          >
            {filteredStations.map(s => (
              <button
                key={s.id}
                onClick={() => {
                  onStationChange(s.name);
                  setSearch('');
                  setIsOpen(false);
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-stone-50 transition-colors flex items-center justify-between"
              >
                <span className="font-medium text-stone-700">{s.name}</span>
                <div className="flex gap-1">
                  {s.lines.map(lId => (
                    <div 
                      key={lId} 
                      className="w-4 h-4 rounded-full" 
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full bg-white rounded-3xl p-5 shadow-sm border border-black/5 text-left mb-4 relative overflow-hidden"
    >
      {isBest && (
        <div className="absolute top-0 right-0">
          <div className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter">
            最优推荐
          </div>
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        <div className="text-right pr-12">
          <p className="text-xs text-stone-400 font-medium">{route.totalStops} 站 · {route.transfers} 次换乘</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-y-3">
        {route.steps.map((step, idx) => {
          const line = METRO_LINES.find(l => l.id === step.lineId);
          const lineShortName = line?.name.split(' ')[0];
          
          if (step.type === 'transfer') {
            return (
              <React.Fragment key={idx}>
                <div className="mx-1 flex items-center">
                  <div className="w-1 h-1 rounded-full bg-stone-300 mx-1" />
                  <div className="px-2 py-1.5 bg-amber-50 rounded-xl border border-amber-200 flex items-center gap-1.5">
                    <RefreshCw className="w-3 h-3 text-amber-600" />
                    <span className="text-xs font-black text-amber-700">{step.from}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-stone-300 mx-1" />
                </div>
              </React.Fragment>
            );
          }

          const isFirst = idx === 0;
          const isLast = idx === route.steps.length - 1;

          return (
            <React.Fragment key={idx}>
              {isFirst && (
                <span className="text-sm font-black text-stone-900 mr-2">{step.from}</span>
              )}
              
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl shadow-sm border" style={{ backgroundColor: `${line?.color}10`, borderColor: `${line?.color}40` }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: line?.color }} />
                <span className="text-xs font-black" style={{ color: line?.color }}>{lineShortName}</span>
              </div>

              {isLast && (
                <>
                  <div className="w-1 h-1 rounded-full bg-stone-300 mx-2" />
                  <span className="text-sm font-black text-stone-900">{step.to}</span>
                </>
              )}
              
              {!isLast && route.steps[idx + 1].type !== 'transfer' && (
                <div className="w-1 h-1 rounded-full bg-stone-300 mx-2" />
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
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="bg-white p-6 sticky top-0 z-10 border-b border-stone-100">
        <button onClick={onBack} className="flex items-center gap-2 text-stone-500 font-medium mb-4">
          <ArrowLeft className="w-4 h-4" /> 返回
        </button>
        <h1 className="text-2xl font-black text-stone-900 tracking-tight">换乘指引</h1>
      </div>

      <div className="p-6 space-y-8">
        {route.transfers === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-stone-800 mb-2">直达路线</h2>
            <p className="text-stone-500">本路线无需换乘，请直接乘坐 {METRO_LINES.find(l => l.id === route.steps[0].lineId)?.name}</p>
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
                {/* Line connector */}
                <div 
                  className="absolute left-[11px] top-6 bottom-0 w-1.5 rounded-full" 
                  style={{ backgroundColor: line?.color }} 
                />
                
                {/* Station Dot */}
                <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-white border-4 flex items-center justify-center shadow-sm z-10" style={{ borderColor: line?.color }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: line?.color }} />
                </div>

                <div className="space-y-6 pb-12">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-stone-900">{step.from}</h3>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded text-white" style={{ backgroundColor: line?.color }}>{line?.name.split(' ')[0]}</span>
                    </div>
                    <p className="text-stone-500 text-sm font-medium">
                      乘坐 <span className="text-stone-800 font-bold">{line?.name}</span> 往 <span className="text-stone-800 font-bold">{direction}</span> 方向
                    </p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-stone-400 font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.stops.length * 2} 分钟
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {step.stops.length} 站
                      </div>
                    </div>
                  </div>

                  {isTransfer && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white rounded-3xl p-6 border border-stone-100 shadow-xl shadow-stone-200/50 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                      
                      <div className="flex items-center justify-between mb-6 relative">
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-50 p-2.5 rounded-2xl">
                            <RefreshCw className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-stone-900">换乘指引：{nextStep.from}</p>
                            <p className="text-xs text-stone-400 font-medium">换乘至 {targetLine?.name.split(' ')[0]}</p>
                          </div>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-black rounded uppercase tracking-tighter">
                            {transferDetail?.method || '节点'}换乘
                          </span>
                          <span className="text-[10px] font-bold text-stone-400 uppercase">预计 {transferDetail?.time || '2分钟'}</span>
                        </div>
                      </div>

                      {transferDetail ? (
                        <div className="space-y-6 relative">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-stone-50 rounded-2xl p-3 text-center">
                              <p className="text-[9px] font-black text-stone-400 uppercase mb-1 tracking-wider">推荐车厢</p>
                              <p className="text-xl font-black text-stone-900">{transferDetail.cars.includes('ANY') ? '任意' : transferDetail.cars.join('、')}</p>
                            </div>
                            <div className="bg-stone-50 rounded-2xl p-3 text-center">
                              <p className="text-[9px] font-black text-stone-400 uppercase mb-1 tracking-wider">推荐车门</p>
                              <p className="text-xl font-black text-stone-900">{transferDetail.doors.includes('ANY') ? '任意' : transferDetail.doors.join('、')}</p>
                            </div>
                            <div className="bg-stone-50 rounded-2xl p-3 text-center">
                              <p className="text-[9px] font-black text-stone-400 uppercase mb-1 tracking-wider">开门方向</p>
                              <p className="text-xl font-black text-stone-900">{transferDetail.doorSide || '左侧'}</p>
                            </div>
                          </div>

                          {/* Train Visualization */}
                          <div className="relative pt-8 pb-2">
                            {headCar && (
                              <div className={`absolute top-0 flex flex-col items-center transition-all duration-500`} style={{ left: `${(Number(headCar) - 1) * (100 / totalCars) + (50 / totalCars)}%`, transform: 'translateX(-50%)' }}>
                                <ArrowRight className={`w-3 h-3 text-stone-400 ${Number(headCar) === 1 ? '-rotate-180' : ''}`} />
                                <span className="text-[7px] font-black text-stone-400 uppercase mt-0.5">车头</span>
                              </div>
                            )}
                            <div className="flex gap-1 h-7">
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
                                    className={`flex-1 rounded-lg border-2 transition-all duration-500 flex items-center justify-center text-[9px] font-black ${
                                      isRecommended 
                                        ? 'bg-emerald-500 border-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
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
                            <Info className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                            <p className="text-[11px] text-amber-800 font-medium leading-relaxed">“{transferDetail.notes}”</p>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-6 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                          <p className="text-xs text-stone-400 font-medium">暂无该换乘站的详细车厢数据</p>
                          <p className="text-[10px] text-stone-300 mt-1 uppercase">Data Pending Update</p>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {!isTransfer && idx === route.steps.length - 1 && (
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-stone-900 flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-black text-stone-900">到达 {step.to}</h3>
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
    <div className="min-h-screen bg-[#F5F5F0] font-sans text-stone-900 selection:bg-emerald-100">
      {/* Header */}
      <header className="p-6 pt-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-8 bg-emerald-500 rounded-full" />
          <h1 className="text-3xl font-black tracking-tighter text-stone-900">深铁精指</h1>
        </div>
        <p className="text-stone-500 font-medium text-sm">SHENZHEN METRO PRECISE GUIDE</p>
      </header>

      <main className="px-6 pb-24">
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
              className="w-10 h-10 rounded-full bg-white shadow-lg border border-stone-100 flex items-center justify-center hover:rotate-180 transition-transform duration-500"
             >
               <ArrowRight className="w-5 h-5 text-stone-400 rotate-90" />
             </button>
          </div>

          <StationPicker
            label="终点站"
            placeholder="您要去哪儿？"
            value={endStation}
            onStationChange={setEndStation}
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePlan}
            disabled={!startStation || !endStation}
            className="w-full bg-stone-900 text-white py-5 rounded-3xl font-bold text-lg shadow-xl shadow-stone-200 disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2"
          >
            开始规划 <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Results Section */}
        <AnimatePresence>
          {isPlanning && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-sm font-black text-stone-400 uppercase tracking-widest">推荐路线</h2>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">实时更新</span>
              </div>
              
              {routes.length > 0 ? (
                routes.map((r, i) => (
                  <RouteCard key={`${r.score}-${i}`} route={r} isBest={i === 0} onClick={() => setSelectedRoute(r)} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-stone-200">
                  <Info className="w-8 h-8 text-stone-300 mx-auto mb-3" />
                  <p className="text-stone-400 font-medium">未找到可用路线，请检查输入</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Nav Mock */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#F5F5F0] to-transparent pointer-events-none">
        <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl rounded-full p-2 shadow-2xl border border-white/20 flex justify-around pointer-events-auto">
          <button className="p-3 rounded-full bg-stone-900 text-white shadow-lg"><Navigation className="w-5 h-5" /></button>
          <button className="p-3 rounded-full text-stone-400"><Search className="w-5 h-5" /></button>
          <button className="p-3 rounded-full text-stone-400"><MapPin className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}
