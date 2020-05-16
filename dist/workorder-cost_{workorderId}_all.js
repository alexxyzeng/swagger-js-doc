/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-cost/findAllUsingGET_6
 * @summary 查询费用列表
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllUsingGET_6(params) {
  return API.get(`/workorder-cost/${workorderId}/all`, {})
}

