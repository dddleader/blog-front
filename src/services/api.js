import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
  baseURL: 'http://localhost:8082/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  config => config,  // 简化的拦截器
  error => Promise.reject(error)
)

// 响应拦截器
api.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

// 导出 api 实例
export default api  // 修改这里：使用 export default