/**
 * @tags service-center-demand-evaluate
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-evaluate/createVisitUsingPOST
 * @summary 新增需求回访
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 反馈意见-前端组件
 * @param {number} params.body.evaluateBy - 评价人
 * @param {string} params.body.feedback - 反馈意见
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {[satisfactionsItem]} params.body.satisfactions - 需求评价满意度
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createVisitUsingPOST(params) {
  return API.post(`/demand/${params.demand-id}/visit`, { ...params.body })
}

