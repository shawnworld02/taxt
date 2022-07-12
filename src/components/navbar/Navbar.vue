<template>
  <div class="navbar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li><a href="javascript:void(0);" class="select-car-btn">选择车辆</a></li>
      <li><i class="icon icon-location"></i></li>
      <li><i class="icon icon-user"></i></li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/styles/sassConfig.scss";
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  li {
    display: inline-block;
    margin: 0 17px;
    cursor: pointer;
  }
  .icon {
    vertical-align: middle;
  }
}
.select-car-btn {
  display: inline-block;
  text-decoration: none;
  width: 240px;
  height: 84px;
  line-height: 84px;
  border-radius: 100px;
  text-align: center;
  font-size: 26px;
  font-weight: 300;
  color: #fff;
  background-color: $color-main;
}
</style>
