import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  //the store
  store: store,
  render: (h) => h(App),
}).$mount("#app");
