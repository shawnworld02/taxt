<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          v-for="(item, index) in menuTab"
          @click="handleClick(index)"
          :class="currentIndexOfItem === index ? 'current' : ''"
          :key="item.id"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      menuTab: [
        { text: "登录", id: 1 },
        { text: "注册", id: 2 },
      ],
      currentIndexOfItem: 0,
    };
  },
  created() {},
  mounted() {
    //挂载完成后自动执行
  },
  methods: {
    handleClick(index) {
      this.currentIndexOfItem = index;
    },
  },
};
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
