/**
 * @typedef {object} failReasonsItem
 
 * @property {string} fail 
 * @property {number} userId 
 *
*/

/**
 * @typedef {object} data
 * @property {[number]} fail
 * @property {[failReasonsItem]} failReasons
 * @property {[number]} success
 *
*/

/**
 * @typedef {object} batchRemoveUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} batchRemoveUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/batchRemoveUsingPUT
 * @summary 批量移出/删除用户
 * @description 
 * @param {object} params
  * @param {batchRemoveUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<batchRemoveUsingPUTResponse>}
*/
export function batchRemoveUsingPUT(params) {
  return API.put(`/employee/batch-remove`, { ...params.body })
}

