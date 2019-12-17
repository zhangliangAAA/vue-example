<template>
  <div class="foo">
    <p>嵌套路由--foo</p>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
     
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.foo{
  border: 1px solid red;
  margin: 10px;
}
</style>
