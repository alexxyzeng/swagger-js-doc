/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/batchDeactivateUsingPUT
 * @summary 批量失效用户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[userIdsItem]} params.body.userIds - 用户ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchDeactivateUsingPUT(params) {
  return API.put(`/employee/batch-deactivate`, { ...params.body })
}

