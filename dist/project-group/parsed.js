/**
 * @typedef {object} contentItem
 
 * @property {string} defaultGroup 是否默认项目组：1、是 0、否 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 * @property {number} projectNums 项目数
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
 * @property {string} defaultGroup 是否默认项目组：1、是 0、否 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 * @property {number} projectNums 项目数
 *
*/

/**
 * @typedef {object} searchUsingGET_4Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_38Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_38Body
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 *
*/
/**
 * @tags base-project-group
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project-group/searchUsingGET_4
 * @summary 项目组列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise<searchUsingGET_4Response>}
*/
export function searchUsingGET_4(params) {
  return API.get(`/project-group`, { params: { ...params.query }, { ...params.body })
}

/**
 * @tags base-project-group
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project-group/createUsingPOST_38
 * @summary 新增项目组
 * @description 
 * @param {object} params
  * @param {createUsingPOST_38Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_38Response>}
*/
export function createUsingPOST_38(params) {
  return API.post(`/project-group`, { ...params.body })
}

