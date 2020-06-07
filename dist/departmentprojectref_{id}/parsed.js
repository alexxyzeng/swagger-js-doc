/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} departmentId 部门ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_11Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_12Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_12Body
 * @property {number} departmentId 部门ID
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_12Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags departmentprojectref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/departmentprojectref/findByIdUsingGET_11
 * @summary 部门项目关联表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_11Response>}
*/
export function findByIdUsingGET_11(params) {
  return API.get(`/departmentprojectref/${params.id}`, {})
}

/**
 * @tags departmentprojectref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/departmentprojectref/updateUsingPUT_12
 * @summary 修改部门项目关联表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_12Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_12Response>}
*/
export function updateUsingPUT_12(params) {
  return API.put(`/departmentprojectref/${params.id}`, { ...params.body })
}

/**
 * @tags departmentprojectref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/departmentprojectref/deleteUsingDELETE_12
 * @summary 删除部门项目关联表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_12Response>}
*/
export function deleteUsingDELETE_12(params) {
  return API.delete(`/departmentprojectref/${params.id}`, {})
}

