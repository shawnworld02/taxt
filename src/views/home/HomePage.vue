<template>
  <div>
    <!--cars data渲染-->
    <CarsList />
    <!--地图-->
    <Amap />
    <!-- 导航 -->
    <Navbar />
    <!--会员-->
    <!-- <div id="children-view" :class="[show ? 'open' : '']"> -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Amap from "../amap/Amap.vue";
import CarsList from "../cars/CarsList.vue";
import Navbar from "@/components/navbar/Navbar";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  components: {
    Amap,
    CarsList,
    Navbar,
  },
  watch: {},
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Home" ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 410px;
  z-index: 101;
  background-color: #34393f;
  //增加动画效果
  @include webkit(transition, all 0.3s ease 0s);
  &.open {
    right: 0px;
  }
}
</style>
