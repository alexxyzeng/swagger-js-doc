/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/refundUsingPUT
 * @summary 退单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.execEmployeeId - 工单执行人ID
 * @param {string} params.body.execEmployeeName - 工单执行人名称
 * @param {number} params.body.woExecEmployeeId - 工单执行人主键ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function refundUsingPUT(params) {
  return API.put(`/workorder/${params.id}/refund`, { ...params.body })
}

