<template>
  <div class="bar">
    <p>嵌套路由--bar</p>
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
.bar{
  border: 1px solid red;
  margin: 10px;
}
</style>
