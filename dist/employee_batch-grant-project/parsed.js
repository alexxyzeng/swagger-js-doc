/**
 * @typedef {object} batchGrantProjectUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} batchGrantProjectUsingPUTBody
 * @property {[number]} projectIds
 * @property {[number]} userIds
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/batchGrantProjectUsingPUT
 * @summary 批量授权用户
 * @description 
 * @param {object} params
  * @param {batchGrantProjectUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<batchGrantProjectUsingPUTResponse>}
*/
export function batchGrantProjectUsingPUT(params) {
  return API.put(`/employee/batch-grant-project`, { ...params.body })
}

