import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Form, FormItem, Input, Row, Col } from "element-ui";

//高德地图
import "@/plugin/aMap";
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
