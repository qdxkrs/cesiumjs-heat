require('cesium/Build/Cesium/Widgets/widgets.css');
require('./css/main.css');
import * as Cesium from 'cesium';
import data from './data/last-all-airbox'
import getCesiumHeat from './lib/CesiumHeat';

const CesiumHeat = getCesiumHeat(Cesium)
const viewer = new Cesium.Viewer('container');
// @ts-ignore
window.viewer = viewer

let heat = new CesiumHeat(
  viewer,
  data.feeds.map(({ gps_lon, gps_lat, s_d0 }) => {
    return {
      x: gps_lon,
      y: gps_lat,
      value: s_d0,
    }
  }),
  [120.106188593, 21.9705713974, 121.951243931, 25.2954588893]
)

setTimeout(()=>heat.destory(),10*60*1000)