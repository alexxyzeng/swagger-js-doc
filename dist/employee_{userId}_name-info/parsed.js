/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/updateNameInfoUsingPUT
 * @summary 修改用户姓名信息
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.name - 姓名
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateNameInfoUsingPUT(params) {
  return API.put(`/employee/${params.userId}/name-info`, { ...params.body })
}

