<template>
  <div class="login">
    <h1>登录页面</h1>
    <div class="info">
      <el-input
        placeholder="请输入账号"
        v-model="account"
      >
        <template slot="prepend">账号：</template>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
      >
        <template slot="prepend">密码：</template>
      </el-input>
      <el-button
        type="primary"
        v-countdown="{callback : login, seconds : 10}"
      >登 录</el-button>
    </div>

  </div>
</template>
<script>
import dynamic from '@/router/dynamic.js'

export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    login() {
      console.log('Login-----')
      if(this.password === '123456'){

        let count = parseInt(Math.random()*4) + 1
        dynamic.length = count
        console.log('处理后的动态路由',dynamic)
        this.$router.addRoutes(dynamic) //添加路由

        this.$store.commit('UPDATE_SIDEBAR_ROUTES',dynamic) //改变侧边栏

        sessionStorage.setItem('loggedIn',true)
        this.$router.push('home')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    .info{
      width: 300px;
      margin: 0 auto;
    }
  }
</style>
