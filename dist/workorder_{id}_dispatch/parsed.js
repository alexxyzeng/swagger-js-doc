/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/dispatchUsingPUT
 * @summary 排程派工
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 工作内容
 * @param {[executorDtosItem]} params.body.executorDtos - 执行人信息
 * @param {string} params.body.expectEndTime - 预计结束时间
 * @param {string} params.body.expectStartTime - 预计开始时间
 * @param {string} params.body.expectWorkTime - 预计工作时间
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function dispatchUsingPUT(params) {
  return API.put(`/workorder/${params.id}/dispatch`, { ...params.body })
}

