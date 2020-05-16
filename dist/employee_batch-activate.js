/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/batchActivateUsingPUT
 * @summary 批量激活用户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchActivateUsingPUT(params) {
  return API.put(, { ...params.body })
}

