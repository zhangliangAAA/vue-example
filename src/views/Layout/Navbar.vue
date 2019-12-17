<template>
  <div class="navbar">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="nav">
      <el-breadcrumb-item v-for="route in levelList" :key="route.path" :to="{path: route.path}">{{route.name}}</el-breadcrumb-item>
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> -->
     
    </el-breadcrumb>
    <div class="user">
      <i class="el-icon-user-solid"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted () {
    
  },
  computed: {
   levelList(){
     let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name !== '首页') {
        matched = [{ path: '/home', name:'首页'}].concat(matched)
      }
      return matched
   }
  },
  watch:{
  
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  .nav{
    height: 40px;
    line-height: 40px;
  }
  .user{
  //  margin-right: 20px;
  }
}
</style>
