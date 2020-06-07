/**
 * @typedef {object} batchActivateUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} batchActivateUsingPUTBody
 * @property {[number]} userIds
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/batchActivateUsingPUT
 * @summary 批量激活用户
 * @description 
 * @param {object} params
  * @param {batchActivateUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<batchActivateUsingPUTResponse>}
*/
export function batchActivateUsingPUT(params) {
  return API.put(`/employee/batch-activate`, { ...params.body })
}

