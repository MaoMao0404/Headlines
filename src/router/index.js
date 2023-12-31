import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '../views/Home/Home.vue'
import User from '../views/User/User.vue'

// 使用插件
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  // 定义首页的路由规则
  {
    path:'/',
    component:Home

  },
  // 定义我的路由规则
  {
    path:'/user',
    component:User

  }
  
]

// 创建路由
const router = new VueRouter({
  routes
})

export default router
