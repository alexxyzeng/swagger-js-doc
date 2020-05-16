/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-employee/batchDeactivateUsingPUT
 * @summary 批量失效用户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchDeactivateUsingPUT(params) {
  return API.put(, { ...params.body })
}

