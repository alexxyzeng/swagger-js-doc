/**
 * @typedef {object} updatePasswordUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updatePasswordUsingPUTBody
 * @property {string} newPassword 新密码
 * @property {string} oldPassword 原密码
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/updatePasswordUsingPUT
 * @summary 用户修改密码
 * @description 
 * @param {object} params
  * @param {updatePasswordUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<updatePasswordUsingPUTResponse>}
*/
export function updatePasswordUsingPUT(params) {
  return API.put(`/employee/update-password`, { ...params.body })
}

