// pages/index/index.js
const { METRO_LINES } = require('../../utils/metroData');
const { findRoutes } = require('../../utils/routing');
const { findTransferDetail } = require('../../utils/transferData');

Page({
  data: {
    activeTab: 'home',
    startStation: '',
    endStation: '',
    routes: [],
    hasPlanned: false,
    lineColors: {},
    showModal: false,
    selectedRoute: null
  },

  onLoad() {
    const colors = {};
    METRO_LINES.forEach(line => {
      colors[line.id] = line.color;
    });
    this.setData({ lineColors: colors });
  },

  onInputStart(e) {
    this.setData({ startStation: e.detail.value });
  },

  onInputEnd(e) {
    this.setData({ endStation: e.detail.value });
  },

  swapStations() {
    this.setData({
      startStation: this.data.endStation,
      endStation: this.data.startStation
    });
  },

  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab) {
      this.setData({ activeTab: tab });
    }
  },

  handlePlan() {
    const { startStation, endStation } = this.data;
    if (!startStation || !endStation) {
      wx.showToast({ title: '请输入站点', icon: 'none' });
      return;
    }

    const routes = findRoutes(startStation, endStation);
    this.setData({
      routes,
      hasPlanned: true
    });
  },

  getLineDirection(lineId, from, to) {
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
  },

  showDetail(e) {
    const index = e.currentTarget.dataset.index;
    const route = this.data.routes[index];
    
    // Enrich route with transfer details and directions
    const enrichedSteps = route.steps.map((step, i) => {
      if (step.type === 'ride') {
        const direction = this.getLineDirection(step.lineId, step.from, step.to);
        return { ...step, direction, showStops: false };
      }
      
      if (step.type === 'transfer') {
        const prevRide = route.steps[i - 1];
        const nextRide = route.steps[i + 1];
        
        if (prevRide && nextRide) {
          const direction = this.getLineDirection(prevRide.lineId, prevRide.from, prevRide.to);
          const nextDirection = this.getLineDirection(nextRide.lineId, nextRide.from, nextRide.to);
          const detail = findTransferDetail(prevRide.lineId, direction, step.from, nextRide.lineId, nextDirection);
          
          if (detail) {
            // Convert ANY to 任意
            const displayCars = detail.cars.map(c => c === 'ANY' ? '任意' : c);
            const displayDoors = detail.doors.map(d => d === 'ANY' ? '任意' : d);

            // Calculate train visualization data
            const linesWith8Cars = ['10', '11', '13', '14', '20'];
            const totalCars = linesWith8Cars.includes(prevRide.lineId) ? 8 : 6;
            
            const headCarMatch = detail.notes.match(/(\d+)号车为车头/);
            const headCar = headCarMatch ? parseInt(headCarMatch[1]) : 1;
            const headPos = ((headCar - 1) * (100 / totalCars) + (50 / totalCars));

            const recommendedCars = {};
            detail.cars.forEach(c => {
              if (c === 'ANY') {
                for (let j = 1; j <= totalCars; j++) recommendedCars[j] = true;
              } else if (c.includes('-')) {
                const [start, end] = c.split('-').map(Number);
                for (let j = start; j <= end; j++) recommendedCars[j] = true;
              } else {
                recommendedCars[parseInt(c)] = true;
              }
            });

            return { 
              ...step, 
              transferDetail: { ...detail, cars: displayCars, doors: displayDoors },
              totalCars,
              headPos,
              recommendedCars
            };
          }
        }
      }
      return step;
    });

    this.setData({
      selectedRoute: { ...route, steps: enrichedSteps },
      showModal: true
    });
  },

  toggleStops(e) {
    const index = e.currentTarget.dataset.index;
    const steps = this.data.selectedRoute.steps;
    steps[index].showStops = !steps[index].showStops;
    this.setData({
      'selectedRoute.steps': steps
    });
  },

  closeModal() {
    this.setData({ showModal: false });
  },

  onShareAppMessage() {
    return {
      title: '深铁精指 - 深圳地铁精准换乘指南',
      path: '/pages/index/index'
    }
  },

  onShareTimeline() {
    return {
      title: '深铁精指 - 深圳地铁精准换乘指南'
    }
  }
})


