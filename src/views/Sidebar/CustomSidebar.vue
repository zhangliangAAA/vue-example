<template>
  <div class="custom">
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
      <el-menu-item index="/home">
        <i class="el-icon-setting"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-submenu index="/components">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>组件</span>
        </template>

        <el-menu-item index="/about">about</el-menu-item>

        <el-submenu index="/images">
          <template slot="title">图片处理</template>
          <el-menu-item index="/image">图片编辑</el-menu-item>
          <el-menu-item index="1-2">图片剪切</el-menu-item>
        </el-submenu>

        <el-submenu index="/分组2">
          <template slot="title">分组2</template>
          <el-menu-item index="/parent">父子组件</el-menu-item>
          <el-menu-item index="/mixin">Mixin</el-menu-item>
        </el-submenu>
      </el-submenu>
    

      <el-submenu index="/users">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>用户</span>
        </template>

        <el-submenu index="/user" >
          <template slot="title">普通用户</template>
          <el-menu-item index="/user/123">User1</el-menu-item>
        </el-submenu>

      </el-submenu>

      <el-submenu index="/nest">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>嵌套路由</span>
        </template>
        <el-menu-item index="/nest/foo" >nest-foo</el-menu-item>
        <el-menu-item index="/nest/foo/child" >nest-foo-child</el-menu-item>
        <el-menu-item index="/nest/bar">nest-bar</el-menu-item>
      </el-submenu>
      
    </el-menu>
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
.custom{
  height: 100%;
  .el-menu-vertical-demo{
    height: 100%;
  }
}
</style>
