import Vue from "vue";
import VueCookie from "vue-cookie";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueCookie);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
