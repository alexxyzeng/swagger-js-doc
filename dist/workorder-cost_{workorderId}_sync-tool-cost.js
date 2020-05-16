/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-cost/updateIsSyncToolCostUsingPUT
 * @summary 修改工具费用是否计入
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateIsSyncToolCostUsingPUT(params) {
  return API.put(`/workorder-cost/${workorderId}/sync-tool-cost`, { ...params.body })
}

