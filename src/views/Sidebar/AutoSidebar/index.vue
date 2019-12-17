<template>
  <div class="auto">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >

    <sidebar-item :routes="sidebarRoutes"></sidebar-item>

    </el-menu>
  </div>
</template>
<script>
// import routes from '@/router/routes'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name:'AutoSidebar',
  components:{
    SidebarItem
  },
  data() {
    return {
      // routes
    }
  },

  computed: {
    ...mapGetters({
      sidebarRoutes:'global/sidebarRoutes' //带命名空间
    }),
  },
  mounted() {
     console.log('----Auto-Sidebar----',this.sidebarRoutes)
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.auto{
  height: 100%;
  .el-menu-vertical-demo{
    height: 100%;
  }
}
</style>
