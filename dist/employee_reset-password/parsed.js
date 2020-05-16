/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/resetPasswordUsingPUT
 * @summary 重置用户密码
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.employeeId - 人员id
 * @param {string} params.body.newPassword - 新密码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function resetPasswordUsingPUT(params) {
  return API.put(`/employee/reset-password`, { ...params.body })
}

