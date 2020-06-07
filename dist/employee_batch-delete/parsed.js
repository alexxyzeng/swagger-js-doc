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
 * @typedef {object} batchDeleteUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} batchDeleteUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/batchDeleteUsingPUT
 * @summary 批量删除用户
 * @description 
 * @param {object} params
  * @param {batchDeleteUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<batchDeleteUsingPUTResponse>}
*/
export function batchDeleteUsingPUT(params) {
  return API.put(`/employee/batch-delete`, { ...params.body })
}

