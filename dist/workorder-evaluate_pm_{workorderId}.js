/**
 * @tags workorder-evaluate
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-evaluate/pmEvaluateUsingPOST
 * @summary 维保工作评价
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function pmEvaluateUsingPOST(params) {
  return API.post(`/workorder-evaluate/pm/${workorderId}`, { ...params.body })
}

