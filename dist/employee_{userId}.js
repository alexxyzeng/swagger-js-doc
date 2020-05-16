/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/findUsingGET_14
 * @summary 用户详情
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_14(params) {
  return API.get(`/employee/${userId}`, {})
}

/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/updateUsingPUT_12
 * @summary 修改用户
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_12(params) {
  return API.put(`/employee/${userId}`, { ...params.body })
}

