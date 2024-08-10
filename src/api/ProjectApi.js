/**
 * @name: ProjectApi
 * @description: TODO
 * @author: Lingkai Shi
 * @date: 7/10/2024 2:44 PM
 * @version: 1.0
 */
import instance from '@/api/filter'

const projectApi = ''

export const getAllProject = (page, pageSize) => {
  if (page == undefined || pageSize == undefined)
    return instance.get(`${projectApi}/project/getAll`)
  else
    return instance.get(`${projectApi}/project/getAll?page=${page}&pageSize=${pageSize}`)
}

export const getAllMyOwnProject = (page, pageSize) => {
  if (page == undefined || pageSize == undefined)
    return instance.get(`${projectApi}/project/getAllMyOwn`)
  else
    return instance.get(`${projectApi}/project/getAllMyOwn?page=${page}&pageSize=${pageSize}`)
}

export const getProjectById = (id) => {
  return instance.get(`${projectApi}/project/getById?id=${id}`)
}

export const addProject = (params) => {
  return instance.post(`${projectApi}/project/add`, params)
}
