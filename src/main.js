import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const host = process.env.VUE_APP_ROOT_API;
export const bus = new Vue({});

new Vue({
  render: h => h(App),
}).$mount('#app')
