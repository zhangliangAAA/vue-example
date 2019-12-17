<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar class="navbar"/>
      <app-main class="main"/>
    </div>
  </div>
</template>

<script>

// import RightPanel from '@/components/RightPanel'
// import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components'
// import ResizeMixin from './mixin/ResizeHandler'
// import { mapState } from 'vuex'

import Sidebar from '@/views/Sidebar/AutoSidebar/index'
import Navbar from './Navbar'
import AppMain from './AppMain'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    // Navbar,
    // RightPanel,
    // Settings,
    Sidebar,
    // TagsView
  },
  // mixins: [ResizeMixin],
  computed: {

  },
  mounted(){
    console.log('layout - mount')
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.app-wrapper{
  width: 100%;
  display: flex;
  .sidebar-container{
    width: 200px;
  }
  .main-container{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .navbar{

    }
    .main{
      flex: 1;
    }
  }
}
//   @import "~@/styles/mixin.scss";
//   @import "~@/styles/variables.scss";

//   .app-wrapper {
//     @include clearfix;
//     position: relative;
//     height: 100%;
//     width: 100%;

//     &.mobile.openSidebar {
//       position: fixed;
//       top: 0;
//     }
//   }

//   .drawer-bg {
//     background: #000;
//     opacity: 0.3;
//     width: 100%;
//     top: 0;
//     height: 100%;
//     position: absolute;
//     z-index: 999;
//   }

//   .fixed-header {
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index: 9;
//     width: calc(100% - #{$sideBarWidth});
//     transition: width 0.28s;
//   }

//   .hideSidebar .fixed-header {
//     width: calc(100% - 54px)
//   }

//   .mobile .fixed-header {
//     width: 100%;
//   }
</style>
