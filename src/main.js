import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './routes/Router.js';
import '@/assets/css/tailwind.css'
import Notifications from 'vue-notification'
import store from './store/index.js'

Vue.use(Notifications)
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
