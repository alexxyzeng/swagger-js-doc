/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/updatePhoneInfoUsingPUT
 * @summary 修改用户手机号信息
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updatePhoneInfoUsingPUT(params) {
  return API.put(`/employee/${userId}/phone-info`, { ...params.body })
}

