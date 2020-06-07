/**
 * @typedef {object} removeUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/removeUsingPUT
 * @summary 删除用户
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @return {Promise<removeUsingPUTResponse>}
*/
export function removeUsingPUT(params) {
  return API.put(`/employee/remove/${params.userId}`, {})
}

