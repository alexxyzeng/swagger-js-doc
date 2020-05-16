/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/acceptUsingPUT
 * @summary 接单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.woExecEmployeeId - 工单执行人主键ID
* @param {number} params.query.execEmployeeId - 工单执行人ID
* @param {string} params.query.execEmployeeName - 工单执行人名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function acceptUsingPUT(params) {
  return API.put(`/workorder/${params.id}/accept`, { params: { ...params.query })
}

