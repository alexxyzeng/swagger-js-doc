/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/batchEditUsingPUT
 * @summary 批量编辑用户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.orgDepartmentId - 部门ID
 * @param {number} params.body.orgPositionId - 岗位ID
 * @param {[roleIdsItem]} params.body.roleIds - 
 * @param {[userIdsItem]} params.body.userIds - 用户ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchEditUsingPUT(params) {
  return API.put(`/employee/batch-edit`, { ...params.body })
}

