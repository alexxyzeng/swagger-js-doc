/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/continuedUsingPUT
 * @summary 继续
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.execEmployeeId - 工单执行人ID
 * @param {string} params.body.execEmployeeName - 工单执行人名称
 * @param {number} params.body.woExecEmployeeId - 工单执行人主键ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function continuedUsingPUT(params) {
  return API.put(`/workorder/${params.id}/continue`, { ...params.body })
}

