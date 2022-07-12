//高德地图
//高德离线地图
import Vue from "vue";
import VueAMap from "vue-amap";
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: "35a3cf78b403ffaa368a947a8208d28f",
  plugin: [
    "Autocomplete",
    "PlaceSearch",
    "Scale",
    "OverView",
    "ToolBar",
    "MapType",
    "PolyEditor",
    "AMap.CircleEditor",
  ],
  v: "1.4.4",
  uiVersion: "1.0.11",
});
