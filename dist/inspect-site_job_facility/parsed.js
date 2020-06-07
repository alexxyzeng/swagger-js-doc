/**
 * @typedef {object} createUsingPOST_23Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_23Body
 * @property {number} facilityId 设备ID
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {number} id 唯一id
 * @property {number} sort 顺序
 *
*/

/**
 * @typedef {object} deleteUsingPUT_7Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/createUsingPOST_23
 * @summary 新增巡检点位-工作任务-设备
 * @description 
 * @param {object} params
  * @param {createUsingPOST_23Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_23Response>}
*/
export function createUsingPOST_23(params) {
  return API.post(`/inspect-site/job/facility`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingPUT_7
 * @summary 批量删除巡检点位-工作任务-设备
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_7Response>}
*/
export function deleteUsingPUT_7(params) {
  return API.put(`/inspect-site/job/facility`, { ...params.body })
}

