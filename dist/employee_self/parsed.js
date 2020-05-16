/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/findBySelfUsingGET
 * @summary 查询用户个人信息
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findBySelfUsingGET(params) {
  return API.get(`/employee/self`, {})
}

/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/updateBySelfUsingPUT
 * @summary 修改用户个人信息
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.avatarUrl - undefined
 * @param {string} params.body.description - 描述
 * @param {string} params.body.emNo - 员工编号
 * @param {string} params.body.email - 邮箱
 * @param {string} params.body.name - 姓名
 * @param {string} params.body.phone - 手机号
 * @param {string} params.body.telephone - 分机号
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateBySelfUsingPUT(params) {
  return API.put(`/employee/self`, { ...params.body })
}

