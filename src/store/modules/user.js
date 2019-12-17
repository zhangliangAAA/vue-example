// import api from '@/api/index.js'
// import request from '@/utils/request'

const user = {
  state: {
    userId: '',
    userName: '',
    roles: null,
    authTree: {}
  },

  mutations: {
    SET_USER_INFO: (state, info) => {
      const {
        userId,
        userName,
        roles,
        resourceTree
      } = info

      const treeArr = resourceTree && JSON.parse(resourceTree).code ? JSON.parse(resourceTree).resourceTrees : []

      let authTree = {treeArr}

      // authTree = createTreeNode(treeArr)

      state = Object.assign(state, {
        userId,
        userName,
        roles,
        authTree
      })
    }
  },

  actions: {
    // 获取用户信息
    // getUserInfo({
    //   commit
    // }, params) {
    //   return request({
    //     url: apiUrl.user.getUserInfo,
    //     method: 'get',
    //     isNeedLoading: params && params.isNeedLoading
    //   }).then((res) => {
    //     commit('SET_USER_INFO', res.data)
    //     return res
    //   }).catch((err) => {
    //     return Promise.reject(err)
    //   })
    // },

    // // 登录
    // login({
    //   commit
    // }, data) {
    //   return new Promise((resolve, reject) => {
    //     request({
    //       url: apiUrl.user.login,
    //       method: 'post',
    //       data
    //     }).then((res) => {
    //       commit('SET_USER_INFO', res.data)
    //       commit('SET_LOGIN_STATUS', true)
    //       resolve(res)
    //     }).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    // // 获取图形验证码
    // captcha({
    //   commit
    // }, params) {
    //   return new Promise((resolve, reject) => {
    //     request({
    //       url: apiUrl.user.captcha,
    //       method: 'get',
    //       params
    //     }).then((res) => {
    //       resolve(res)
    //     }).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    // // 忘记密码
    // forgetPassword({
    //   commit
    // }, data) {
    //   return new Promise((resolve, reject) => {
    //     request({
    //       url: apiUrl.user.forgetPassword,
    //       method: 'post',
    //       data
    //     }).then((res) => {
    //       resolve(res)
    //     }).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    // // 发送邮箱验证码
    // sendEmailCode({
    //   commit
    // }, data) {
    //   return new Promise((resolve, reject) => {
    //     request({
    //       url: apiUrl.user.sendEmailCode,
    //       method: 'post',
    //       data
    //     }).then((res) => {
    //       resolve(res)
    //     }).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    // // 重置密码
    // resetPassword({
    //   commit
    // }, data) {
    //   return new Promise((resolve, reject) => {
    //     request({
    //       url: apiUrl.user.resetPassword,
    //       method: 'post',
    //       data
    //     }).then((res) => {
    //       resolve(res)
    //     }).catch((err) => {
    //       reject(err)
    //     })
    //   })
    // },

    // // 登出
    // logOut({
    //   commit
    // }) {
    //   return request({
    //     url: apiUrl.user.logout,
    //     method: 'get'
    //   }).then((res) => {
    //     return res
    //   }).catch(() => {
    //     Message({
    //       type: 'error',
    //       message: '退出登录失败,请重新退出登录'
    //     })
    //   })
    // }
  },

  getters: {
    userId: state => state.userId,
    userName: state => state.userName,
    authTree: state => state.authTree
  }
}

export default user

