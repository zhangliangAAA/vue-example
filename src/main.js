import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/directives'
import plugin from '@/plugins'
import store from '@/store/index.js'

// import './dynamicRouter.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(plugin)

// Vue.mixin({
//   created () {
//     console.log('global mixin - created')
//   }
// })
new Vue({
  // 4. 创建和挂载根实例。记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
  router,
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  render: h => h(App)
}).$mount('#app')
