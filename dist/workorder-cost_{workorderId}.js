/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-cost/createUsingPOST_54
 * @summary 新增费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_54(params) {
  return API.post(`/workorder-cost/${workorderId}`, { ...params.body })
}

