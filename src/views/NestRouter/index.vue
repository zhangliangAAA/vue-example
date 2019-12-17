<template>
  <div class="nest">
    <h1>嵌套路由</h1>
    <p>下面是嵌套的内容</p>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
     
    }
  },

  computed: {
 
  },
  mounted() {
    // 提醒一下，当使用路由参数时，例如从 /nest/foo 导航到 /nest/bar，原来的组件实例会被复用。
    // 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    console.log('nest mounted')
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.nest{
  border: 1px solid red;
}
</style>
