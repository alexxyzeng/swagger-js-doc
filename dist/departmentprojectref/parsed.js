/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {number} departmentId 部门ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

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
 * @typedef {object} findUsingGET_15Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_7Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_7Body
 * @property {number} departmentId 部门ID
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_11Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags departmentprojectref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/departmentprojectref/findUsingGET_15
 * @summary 部门项目关联表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_15Response>}
*/
export function findUsingGET_15(params) {
  return API.get(`/departmentprojectref`, { params: { ...params.query })
}

/**
 * @tags departmentprojectref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/departmentprojectref/createUsingPOST_7
 * @summary 新增部门项目关联表
 * @description 
 * @param {object} params
  * @param {createUsingPOST_7Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_7Response>}
*/
export function createUsingPOST_7(params) {
  return API.post(`/departmentprojectref`, { ...params.body })
}

/**
 * @tags departmentprojectref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/departmentprojectref/deleteUsingDELETE_11
 * @summary 批量删除部门项目关联表
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_11Response>}
*/
export function deleteUsingDELETE_11(params) {
  return API.delete(`/departmentprojectref`, { ...params.body })
}

