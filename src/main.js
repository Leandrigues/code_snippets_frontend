import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router'
import router from './router';

Vue.use(VueRouter)
Vue.use(vuetify);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
