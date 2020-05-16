/**
 * @tags service-center-demand-evaluate
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-evaluate/createEvaluateUsingPOST
 * @summary 新增需求评价
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createEvaluateUsingPOST(params) {
  return API.post(`/demand/${demand-id}/evaluate`, { ...params.body })
}

