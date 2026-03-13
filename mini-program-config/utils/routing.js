const { METRO_LINES, ALL_STATIONS } = require("./metroData");

function findRoutes(startStation, endStation) {
  if (startStation === endStation) return [];

  const startStationData = ALL_STATIONS.find(s => s.name === startStation);
  const endStationData = ALL_STATIONS.find(s => s.name === endStation);
  if (!startStationData || !endStationData) return [];

  let pq = [];

  startStationData.lines.forEach(lineId => {
    pq.push({
      node: { station: startStation, lineId },
      path: [{ station: startStation, lineId }],
      cost: 0
    });
  });

  const results = [];
  const visited = new Map();

  while (pq.length > 0) {
    pq.sort((a, b) => a.cost - b.cost);
    const { node, path, cost } = pq.shift();

    const visitedKey = `${node.station}-${node.lineId}`;
    if (visited.has(visitedKey) && visited.get(visitedKey) <= cost) continue;
    visited.set(visitedKey, cost);

    if (node.station === endStation) {
      const route = buildRouteResult(path, cost);
      const isDuplicate = results.some(r => 
        r.steps.map(s => s.lineId).join(',') === route.steps.map(s => s.lineId).join(',') &&
        r.steps.map(s => s.to).join(',') === route.steps.map(s => s.to).join(',')
      );
      if (!isDuplicate) {
        results.push(route);
      }
      if (results.length >= 4) break; 
      continue;
    }

    const line = METRO_LINES.find(l => l.id === node.lineId);
    if (line) {
      const idx = line.stations.indexOf(node.station);
      const neighbors = [];
      if (idx > 0) neighbors.push(line.stations[idx - 1]);
      if (idx < line.stations.length - 1) neighbors.push(line.stations[idx + 1]);

      neighbors.forEach(neighbor => {
        pq.push({
          node: { station: neighbor, lineId: node.lineId },
          path: [...path, { station: neighbor, lineId: node.lineId }],
          cost: cost + 1
        });
      });
    }

    const stationData = ALL_STATIONS.find(s => s.name === node.station);
    if (stationData) {
      stationData.lines.forEach(otherLineId => {
        if (otherLineId !== node.lineId) {
          pq.push({
            node: { station: node.station, lineId: otherLineId },
            path: [...path, { station: node.station, lineId: otherLineId }],
            cost: cost + 8
          });
        }
      });
    }
  }

  return results.sort((a, b) => a.score - b.score);
}

function buildRouteResult(path, score) {
  const steps = [];
  if (path.length === 0) return { steps: [], totalStops: 0, transfers: 0, score: 0 };

  let currentLineId = path[0].lineId;
  let currentFrom = path[0].station;
  let currentStops = [];

  for (let i = 1; i < path.length; i++) {
    const prev = path[i - 1];
    const curr = path[i];

    if (curr.lineId !== prev.lineId) {
      if (currentStops.length > 0) {
        steps.push({
          type: 'ride',
          lineId: currentLineId,
          from: currentFrom,
          to: prev.station,
          stops: [...currentStops]
        });
      }
      steps.push({
        type: 'transfer',
        lineId: curr.lineId,
        from: curr.station,
        to: curr.station,
        stops: []
      });
      currentLineId = curr.lineId;
      currentFrom = curr.station;
      currentStops = [];
    } else {
      currentStops.push(curr.station);
    }
  }

  if (currentStops.length > 0) {
    steps.push({
      type: 'ride',
      lineId: currentLineId,
      from: currentFrom,
      to: path[path.length - 1].station,
      stops: currentStops
    });
  }

  return {
    steps,
    totalStops: path.filter((node, i) => i > 0 && node.lineId === path[i-1].lineId).length,
    transfers: steps.filter(s => s.type === 'transfer').length,
    score
  };
}

module.exports = {
  findRoutes
};
