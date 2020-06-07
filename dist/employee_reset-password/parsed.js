/**
 * @typedef {object} resetPasswordUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} resetPasswordUsingPUTBody
 * @property {number} employeeId 人员id
 * @property {string} newPassword 新密码
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/resetPasswordUsingPUT
 * @summary 重置用户密码
 * @description 
 * @param {object} params
  * @param {resetPasswordUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<resetPasswordUsingPUTResponse>}
*/
export function resetPasswordUsingPUT(params) {
  return API.put(`/employee/reset-password`, { ...params.body })
}

