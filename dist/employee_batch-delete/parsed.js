/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/batchDeleteUsingPUT
 * @summary 批量删除用户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[userIdsItem]} params.body.userIds - 用户ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchDeleteUsingPUT(params) {
  return API.put(`/employee/batch-delete`, { ...params.body })
}

