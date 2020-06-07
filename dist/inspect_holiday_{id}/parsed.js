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
 * @typedef {object} findByIdUsingGET_15Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_23Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_23Body
 * @property {string} endDate 结束日期
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} name 名称
 * @property {string} startDate 开始日期
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_21Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/findByIdUsingGET_15
 * @summary 巡检节假日-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_15Response>}
*/
export function findByIdUsingGET_15(params) {
  return API.get(`/inspect/holiday/${params.id}`, {})
}

/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/updateUsingPUT_23
 * @summary 修改巡检节假日-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_23Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_23Response>}
*/
export function updateUsingPUT_23(params) {
  return API.put(`/inspect/holiday/${params.id}`, { ...params.body })
}

/**
 * @tags inspect
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect/deleteUsingDELETE_21
 * @summary 删除巡检节假日
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_21Response>}
*/
export function deleteUsingDELETE_21(params) {
  return API.delete(`/inspect/holiday/${params.id}`, {})
}

