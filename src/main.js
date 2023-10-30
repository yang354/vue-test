import Vue from 'vue'
import App from './App.vue'


import Header from '@/components/header';
import Footer from '@/components/footer';
import TypeNav from '@/components/typeNav'
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(TypeNav.name, TypeNav);

//引入mockServe文件,让咱们模拟接口跑起来
import "@/mock/mockServe.js";
//注册路由功能
import router from './router';
//注册仓库功能
import store from './store';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
