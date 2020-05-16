/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/updatePasswordUsingPUT
 * @summary 用户修改密码
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updatePasswordUsingPUT(params) {
  return API.put(, { ...params.body })
}

