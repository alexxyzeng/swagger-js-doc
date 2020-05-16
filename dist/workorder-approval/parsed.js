/**
 * @tags workorder-approval
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-approval/createUsingPOST_51
 * @summary 工单审批申请
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[approverDtosItem]} params.body.approverDtos - 审批人
 * @param {string} params.body.content - 审批内容
 * @param {number} params.body.woWorkorderId - 工单id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_51(params) {
  return API.post(`/workorder-approval`, { ...params.body })
}

