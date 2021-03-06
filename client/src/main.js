import Vue from 'vue'
import App from './App.vue'

const VueScrollTo = require('vue-scrollto');
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.use(VueScrollTo)

Vue.config.productionTip = false
export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
