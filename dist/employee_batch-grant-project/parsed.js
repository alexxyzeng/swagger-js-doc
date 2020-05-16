/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/batchGrantProjectUsingPUT
 * @summary 批量授权用户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[projectIdsItem]} params.body.projectIds - 项目ID
 * @param {[userIdsItem]} params.body.userIds - 用户ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchGrantProjectUsingPUT(params) {
  return API.put(`/employee/batch-grant-project`, { ...params.body })
}

