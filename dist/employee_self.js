/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/findBySelfUsingGET
 * @summary 查询用户个人信息
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findBySelfUsingGET(params) {
  return API.get(, {})
}

/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/updateBySelfUsingPUT
 * @summary 修改用户个人信息
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateBySelfUsingPUT(params) {
  return API.put(, { ...params.body })
}

