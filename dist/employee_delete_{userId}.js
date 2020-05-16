/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/deleteUsingPUT
 * @summary 删除用户
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT(params) {
  return API.put(`/employee/delete/${userId}`, {})
}

