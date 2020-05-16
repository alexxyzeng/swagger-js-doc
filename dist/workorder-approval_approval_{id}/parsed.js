/**
 * @tags workorder-approval
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-approval/approvalUsingPUT
 * @summary 工单审批操作
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.result - 拒绝/通过原因
 * @param {string} params.body.type - 操作类型 0-拒绝 1-通过 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function approvalUsingPUT(params) {
  return API.put(`/workorder-approval/approval/${params.id}`, { ...params.body })
}

