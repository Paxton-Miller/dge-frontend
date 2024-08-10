/**
 * @name: userApi
 * @description: TODO
 * @author: Lingkai Shi
 * @date: 4/27/2024 10:11 AM
 * @version: 1.0
 */
// 需要拦截器的地方使用instance对象， 有自定义返回逻辑的地方沿用axios，在组件内部处理返回结果即可
import instance from '@/api/filter'

const userApi = ''

// 获取token
export const login = (params) => {
  return instance.post(`${userApi}/user/login`, params)
}

export const logout = () => {
  return instance.get(`${userApi}/user/logout`)
}

export const register = (params) => {
  return instance.post(`${userApi}/user/add`, params)
}

export const getUserById = (id) => {
  return instance.get(`${userApi}/user/getById?id=${id}`)
}

export const getUserByIds = (idList, page, pageSize) => {
  return instance.get(`${userApi}/user/getByIds?idList=${idList}&page=${page}&pageSize=${pageSize}`)
}

export const getAllUser = (page, pageSize) => {
  if (page == undefined || pageSize == undefined)
    return instance.get(`${userApi}/user/getAll`)
  else
    return instance.get(`${userApi}/user/getAll?page=${page}&pageSize=${pageSize}`)
}
