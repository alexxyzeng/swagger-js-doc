/**
 * @typedef {object} dataItem
 
 * @property {number} num 需求数量
 * @property {string} status 需求状态 {待审核=PendingCheck-1, 待处理=PendingDispose-2, 跟进中=Follow-3, 已建单=CreatedOrder-4, 待验收=PendingConfirm-5, 待评价=PendingEvaluate-6, 已完成=Done-7, 已评价=Evaluate-9, 已取消=Cancel-8}
 *
*/

/**
 * @typedef {object} numbersGroupByStatusUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand/numbersGroupByStatusUsingGET
 * @summary 获取各个状态对应的需求数量
 * @description 
 * @param {object} params
 
 * @return {Promise<numbersGroupByStatusUsingGETResponse>}
*/
export function numbersGroupByStatusUsingGET() {
  return API.get(`/demand/numbers-group-by-status`, {})
}

