<template>
  <div class="auto">
    <template v-for="route in routes">

      <el-menu-item
        v-if="hasLessOneChild(route.children) && !route.hidden"
        :index="resolvePath(route)"
        :key="route.name"
      >
        <i class="el-icon-setting"></i>
        <span slot="title">{{route.name}}</span>
      </el-menu-item>

      <!-- <el-menu-item
        v-if="route.children && route.children.length === 1 && !route.children[0].hidden "
        :index="baseUrl ? (baseUrl + '/' + route.path + '/' + route.children[0].path ) :  (route.path + '/' + route.children[0].path)"
        :key="route.name"
      >
        <i class="el-icon-setting"></i>
        <span slot="title">{{route.name}}</span>
      </el-menu-item> -->

      <el-submenu
        v-if="!hasLessOneChild(route.children)"
        :key="route.name"
        :index="resolvePath(route)"
      >
        <span slot="title">
          <i class="el-icon-menu"></i>
          {{ route.name }}
        </span>

        <sidebar-item
          :routes="route.children"
          :baseUrl="baseUrl ? (baseUrl + '/' + route.path) :  route.path"
        ></sidebar-item>

      </el-submenu>

    </template>
  </div>
</template>
<script>

export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array,
      default: () => []
    },
    baseUrl: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {

    }
  },

  computed: {

  },
  mounted() {

  },
  methods: {
    resolvePath(route) {
      if (route.redirectUrl) { 
        return route.redirectUrl
      }
      if(this.hasChildren(route.children)){ //有children
        let oneChild =  this.hasOneChild(route.children)

        if(oneChild){ //有一个child
          //todo oneChild只有一个Child时 
          return this.baseUrl ? `${this.baseUrl}/${route.path}/${oneChild.path}`:  `${route.path}/${oneChild.path}`
        }else{ 
          return this.baseUrl ? `${this.baseUrl}/${route.path}` :  route.path
        }

      }else{ //无 children
        return this.baseUrl ? `${this.baseUrl}/${route.path}` : route.path 
      }
      
    },

    hasLessOneChild(children){
      if (!children) {
        return true
      }
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      return showingChildren.length <= 1
    },

    hasChildren(children) {
      if (!children) {
        return false
      }
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      if (showingChildren.length === 0) {
        return false
      } else {
        return true
      }
    },
    hasOneChild(children){
      if (!children) {
        return false
      }
      let showChild = null

      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          showChild = item
          return true
        }
      })

      if (showingChildren.length === 1) {
        return showChild
      } else {
        return null
      }
    }

  }
}
</script>

<style lang="scss" scoped>
  .auto {
    height: 100%;
    .el-menu-vertical-demo {
      height: 100%;
    }
  }
</style>
