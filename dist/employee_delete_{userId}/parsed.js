/**
 * @typedef {object} deleteUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/deleteUsingPUT
 * @summary 删除用户
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @return {Promise<deleteUsingPUTResponse>}
*/
export function deleteUsingPUT(params) {
  return API.put(`/employee/delete/${params.userId}`, {})
}

