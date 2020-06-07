/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {string} endDate 结束日期
 * @property {number} id 唯一id
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 名称
 * @property {number} projectId 项目id
 * @property {string} startDate 开始日期
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
 * @property {string} endDate 结束日期
 * @property {number} id 唯一id
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 名称
 * @property {number} projectId 项目id
 * @property {string} startDate 开始日期
 *
*/

/**
 * @typedef {object} findUsingGET_24Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_16Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_16Body
 * @property {string} endDate 结束日期
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} name 名称
 * @property {string} startDate 开始日期
 *
*/

/**
 * @typedef {object} deleteUsingPUT_1Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/findUsingGET_24
 * @summary 巡检节假日-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 名称 
* @param {string} params.query.isWorkday - 是否工作日  是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise<findUsingGET_24Response>}
*/
export function findUsingGET_24(params) {
  return API.get(`/inspect/holiday`, { params: { ...params.query })
}

/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/createUsingPOST_16
 * @summary 新增巡检节假日
 * @description 
 * @param {object} params
  * @param {createUsingPOST_16Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_16Response>}
*/
export function createUsingPOST_16(params) {
  return API.post(`/inspect/holiday`, { ...params.body })
}

/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/deleteUsingPUT_1
 * @summary 批量删除巡检节假日
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_1Response>}
*/
export function deleteUsingPUT_1(params) {
  return API.put(`/inspect/holiday`, { ...params.body })
}

