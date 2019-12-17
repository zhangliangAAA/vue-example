<template>
  <div class="user">
    <h1>User</h1>
    <p>userId: {{$route.params.id}}</p>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
     
    }
  },
  beforeRouteUpdate (to, from, next) {
     console.log('User beforeRouteUpdate', to, from, next)
  },
  computed: {
 
  },
  mounted() {
    // 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。
    // 因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。
    console.log('User mounted',this.$route.params.id)
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.user{
  border: 1px solid red;
  .parent{
    background-color: orange;
  }
}
</style>
