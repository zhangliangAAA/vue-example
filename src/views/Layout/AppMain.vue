<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- <keep-alive :include="cachedViews"> -->
        App-Main ---
        <router-view :key="key" />
      <!-- </keep-alive> -->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() { //由于两个路径对应一个组件，之后组件的生命周期函数不调用，故加 key
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main{
  // background: ;
  padding: 20px 10px;
  border: 1px dotted gray;
}
// .app-main {
//   /* 50= navbar  50  */
//   min-height: calc(100vh - 50px);
//   width: 100%;
//   position: relative;
//   overflow: hidden;
// }

// .fixed-header+.app-main {
//   padding-top: 50px;
// }

// .hasTagsView {
//   .app-main {
//     /* 84 = navbar + tags-view = 50 + 34 */
//     min-height: calc(100vh - 84px);
//   }

//   .fixed-header+.app-main {
//     padding-top: 84px;
//   }
// }
</style>

<style lang="scss">
// fix css style bug in open el-dialog
// .el-popup-parent--hidden {
//   .fixed-header {
//     padding-right: 15px;
//   }
// }
</style>
