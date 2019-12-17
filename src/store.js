// 随着组件的细化，就会遇到多组件状态共享的情况， Vuex当然可以解决这类问题，不过就像 Vuex官方文档所说的，如果应用不够大，为避免代码繁琐冗余，
// 最好不要使用它，今天我们介绍的是 vue.js 2.6 新增加的 Observable API ，通过使用这个 api 我们可以应对一些简单的跨组件数据状态共享的情况。
// 如下这个例子，我们将在组件外创建一个 store，然后在 App.vue组件里面使用 store.js 提供的 store和 mutation方法，同理其它组件也可以这样使用，
// 从而实现多个组件共享数据状态。
// 首先创建一个 store.js，包含一个 store和一个 mutations，分别用来指向数据和处理方法。

import Vue from 'vue'

export const store = Vue.observable({count: 0})

export const mutations = {
  setCount(count){
    store.count = count
  }
}
