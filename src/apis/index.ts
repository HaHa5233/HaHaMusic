import axios from 'axios'
import type { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const service: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true, // 跨域请求时发送Cookie
  timeout: 50000
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    ElMessage.error(error);
    return Promise.reject(error)
  })

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // return Promise.resolve(response)
    const { data } = response
    if (data.code === 200) {
      return Promise.resolve(data)
    } else {
      ElMessage.error(data.message)
      return Promise.reject(new Error(data.message))
    }
  },
  (error: AxiosError) => {
    let message = ''
    const status = error.response?.status
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器故障'
        break
      default:
        message = '网络连接故障'
        ElMessage.error(message)
        return Promise.reject(error)
    }
  }
)

// 导出封装的请求方法
export const api = {
  get<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
  put<T = any>(url: string, data?: object, config?: InternalAxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },
  delete<T = any>(url: string, config?: InternalAxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  }
}