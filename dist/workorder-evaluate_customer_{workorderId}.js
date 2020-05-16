/**
 * @tags workorder-evaluate
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-evaluate/customerEvaluateUsingPOST
 * @summary 客户评价
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function customerEvaluateUsingPOST(params) {
  return API.post(`/workorder-evaluate/customer/${workorderId}`, { ...params.body })
}

