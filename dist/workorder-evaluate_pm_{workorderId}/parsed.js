/**
 * @tags workorder-evaluate
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-evaluate/pmEvaluateUsingPOST
 * @summary 维保工作评价
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.feedback - 反馈意见
 * @param {[satisfactionsItem]} params.body.satisfactions - 评价满意度
 * @param {string} params.body.type - 评价类型 {客户评价=CustomerEvaluate-1, 维保工作评价=PmEvaluate-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function pmEvaluateUsingPOST(params) {
  return API.post(`/workorder-evaluate/pm/${params.workorderId}`, { ...params.body })
}

