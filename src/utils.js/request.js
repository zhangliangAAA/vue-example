import axios from 'axios'

const server = axios.create({
  baseURL: '',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

// 添加一个请求拦截器
server.interceptors.request.use(config => 
  {
    config.headers['client_id'] = 'apollo2'
    config.headers['client_type'] = 'web2'
    return config  
  },
  error => {
    return Promise.reject(error);
  }
)

//添加一个响应拦截器
server.interceptors.response.use(response=>
  {
    if (response.config.responseType === 'blob') return response

    const res = response.data
    if (!res) {
      alert('服务器异常')
      return Promise.reject('error')
    }

    const resCode = +res.code
    if (resCode === 200) {
      if (res.displayMessage) {
        // 信息展示
      }
      return res
    } else if (resCode === 3002) {
      // 重定向地址
      location.href = res.data
    } else {
      alert(res.displayMessage)
      return Promise.reject(res) // 给出返回的值，以便在在调用的时候做特殊处理
    }
  },
  error => {
    alert(error)
    return Promise.reject(error)
  }
)

export default server

