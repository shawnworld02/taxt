<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      :zoom="zoom"
      map-style="normal"
      class="amap-demo"
      :events="events"
    />
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map: null,
      zoom: 18,
      events: {},
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(116.397507, 39.909127),
        zoom: this.zoom,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>
