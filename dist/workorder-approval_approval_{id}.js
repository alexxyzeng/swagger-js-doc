/**
 * @tags workorder-approval
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-approval/approvalUsingPUT
 * @summary 工单审批操作
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function approvalUsingPUT(params) {
  return API.put(`/workorder-approval/approval/${id}`, { ...params.body })
}

