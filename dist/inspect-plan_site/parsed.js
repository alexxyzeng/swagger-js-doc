/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
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
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 *
*/

/**
 * @typedef {object} findUsingGET_27Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_19Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_19Body
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 *
*/

/**
 * @typedef {object} deleteUsingPUT_4Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/findUsingGET_27
 * @summary 巡检计划-点位-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
 * @return {Promise<findUsingGET_27Response>}
*/
export function findUsingGET_27(params) {
  return API.get(`/inspect-plan/site`, { params: { ...params.query })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/createUsingPOST_19
 * @summary 新增巡检计划-点位
 * @description 
 * @param {object} params
  * @param {createUsingPOST_19Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_19Response>}
*/
export function createUsingPOST_19(params) {
  return API.post(`/inspect-plan/site`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingPUT_4
 * @summary 批量删除巡检计划-点位
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_4Response>}
*/
export function deleteUsingPUT_4(params) {
  return API.put(`/inspect-plan/site`, { ...params.body })
}

