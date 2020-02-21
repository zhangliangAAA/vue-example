/**
 * @description Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象：
 * @author 张良浩
 * @param
 */

const MyPlugin = {}


MyPlugin.install = function(Vue, options) {
   // 1. 添加全局方法或属性
   Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log('MyPlugin-添加全局方法或属性-myGlobalMethod')
  }

  // 2. 添加全局资源
  // 2.1指令
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
      console.log('MyPlugin-添加全局资源-directive')
    }
  })
  // 2.2大写
  Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
      // console.log('MyPlugin-注入组件选项-created')
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
    console.log('MyPlugin-添加实例方法-$myMethod')
  }
  
}

export default MyPlugin


