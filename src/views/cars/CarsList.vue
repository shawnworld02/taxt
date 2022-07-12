<template>
  <div class="index-wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <section class="cars-item">
            <header>
              <h4 class="cars-logo">
                <img src="../../assets/imgs/ford.webp" alt="Mustang 2019款" />
                <span class="name">Mustang 2019款</span>
              </h4>
              <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content">
              <div class="info-wrapper">
                <div class="info">
                  <span class="car-number">粤 B745NB</span>
                  <div class="car-detail">
                    <ul class="car-electricity">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <p class="distance">
                      <sub>约</sub>
                      <strong>600</strong>
                      <sub>KM</sub>
                    </p>
                  </div>
                </div>
              </div>
              <img src="@/assets/imgs/汽车.jpeg" alt="Mustang 2019款" />
            </div>
            <footer>
              <a href="javascript:void(0);" class="parking-lot">某某停车场</a>
            </footer>
          </section>
        </div>
        <div class="swiper-slide">
          <section class="cars-item">
            <header>
              <h4 class="cars-logo">
                <img src="../../assets/imgs/ford.webp" alt="Mustang 2019款" />
                <span class="name">Mustang 2019款</span>
              </h4>
              <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content">
              <div class="info-wrapper">
                <div class="info">
                  <span class="car-number">粤 B745NB</span>
                  <div class="car-detail">
                    <ul class="car-electricity">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <p class="distance">
                      <sub>约</sub>
                      <strong>600</strong>
                      <sub>KM</sub>
                    </p>
                  </div>
                </div>
              </div>
              <img src="@/assets/imgs/汽车.jpeg" alt="Mustang 2019款" />
            </div>
            <footer>
              <a href="javascript:void(0);" class="parking-lot">某某停车场</a>
            </footer>
          </section>
        </div>
        <div class="swiper-slide">
          <section class="cars-item">
            <header>
              <h4 class="cars-logo">
                <img src="../../assets/imgs/ford.webp" alt="Mustang 2019款" />
                <span class="name">Mustang 2019款</span>
              </h4>
              <p class="cars-attr">新能源汽车 5座</p>
            </header>
            <div class="cars-content">
              <div class="info-wrapper">
                <div class="info">
                  <span class="car-number">粤 B745NB</span>
                  <div class="car-detail">
                    <ul class="car-electricity">
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    <p class="distance">
                      <sub>约</sub>
                      <strong>600</strong>
                      <sub>KM</sub>
                    </p>
                  </div>
                </div>
              </div>
              <img src="@/assets/imgs/汽车.jpeg" alt="Mustang 2019款" />
            </div>
            <footer>
              <a href="javascript:void(0);" class="parking-lot">某某停车场</a>
            </footer>
          </section>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <span @click="user">汽车列表</span>
  </div>
</template>

<script>
import "swiper/css/swiper.css"; //引入swiper样式
import Swiper from "swiper"; //引入swiper
export default {
  name: "CarsList",
  data() {
    return {};
  },
  methods: {
    user() {
      this.$router.push({
        name: "User",
      });
    },
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项

      slidesPerView: 3,
      spaceBetween: 200,
      freeMode: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // 如果需要分页器
      // pagination: {
      //   el: ".swiper-pagination",
      // },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      //如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./CarsList.scss";
.swiper-container {
  width: 100%;
  height: 400px;
  border-radius: 0.1rem;
}

.swiper-pagination-bullet {
  background-color: white;
}
.swiper-pagination-bullet-active {
  background-color: orangered;
}
</style>
