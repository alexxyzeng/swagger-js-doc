/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/updateEmNoInfoUsingPUT
 * @summary 修改用户工号信息
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateEmNoInfoUsingPUT(params) {
  return API.put(`/employee/${userId}/emno-info`, { ...params.body })
}

