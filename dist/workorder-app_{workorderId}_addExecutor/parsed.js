/**
 * @typedef {object} addExecutorUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} addExecutorUsingPUTBody
 * @property {[number]} employeeIds
 *
*/
/**
 * @tags workorder-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-app/addExecutorUsingPUT
 * @summary 增派
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {addExecutorUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<addExecutorUsingPUTResponse>}
*/
export function addExecutorUsingPUT(params) {
  return API.put(`/workorder-app/${params.workorderId}/addExecutor`, { ...params.body })
}

