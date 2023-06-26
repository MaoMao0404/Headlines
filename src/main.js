import Vue from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入vant组件库
import Vant from 'vant';
// 定制主题 覆盖默认的less变量
import 'vant/lib/index.less';

// 使用插件
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
