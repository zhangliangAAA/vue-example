// import api from '@/api/index.js'
// import request from '@/utils/request'
import router from '@/router'

const global = {
  namespaced: true,
  state: {
    whiteList: ['/login', '/forgetPassword'],
    sidebarRoutes: [...router.options.routes]
  },
  mutations: {
    UPDATE_SIDEBAR_ROUTES(state, routes) {
      state.sidebarRoutes = [...router.options.routes, ...routes]
    }
  },
  actions: {
    // getPrivateRegions({
    //   commit
    // }) {
    //   let citiesJson = localStorage.getItem('citiesJson')
    //   let md5String
    //   if (citiesJson) {
    //     md5String = localStorage.getItem('md5String')
    //   } else {
    //     md5String = ''
    //   }
    //   const params = {
    //     md5String
    //   }

    //   return new Promise((resolve, reject) => {
    //     request({
    //       url: api.global.getPrivateRegions,
    //       method: 'get',
    //       params
    //     }).then(res => { // clusterEnName
    //       // console.log('深坑', res)
    //       if (res.data.md5String !== md5String) {
    //         const citiesOriginJson = JSON.stringify(res.data.regions)
    //         // 用来替换原始数据的key值
    //         const valueCity = citiesOriginJson.replace(/zoneId|hubId|cityId|clusterId|streetId/g, 'value')
    //         const labelCity = valueCity.replace(/zoneCnName|hubCnName|cityCnName|clusterCnName|streetCnName/g, 'label')
    //         const childrenCity = labelCity.replace(/hubList|cityList|clusterList|streetList/g, 'children')
    //         // const streetId = labelCity.replace(/hubList|cityList|clusterList/g, 'children')
    //         citiesJson = childrenCity
    //         localStorage.setItem('md5String', res.data.md5String)
    //         localStorage.setItem('citiesJson', citiesJson)
    //       }
    //       const cityList = JSON.parse(citiesJson)
    //       resolve(cityList)
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // }
  },
  getters: {
    sidebarRoutes: state => state.sidebarRoutes
  }
}

export default global
