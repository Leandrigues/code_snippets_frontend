import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(vuetify);


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
