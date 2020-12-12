import Vue from 'vue'
import App from './App.vue'
import store from '@/store';
import Antd from 'ant-design-vue';
import { router } from './routes';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
