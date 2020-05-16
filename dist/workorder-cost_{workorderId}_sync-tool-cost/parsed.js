/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-cost/updateIsSyncToolCostUsingPUT
 * @summary 修改工具费用是否计入
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.isSyncToolCost - 是否同步工具费用 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateIsSyncToolCostUsingPUT(params) {
  return API.put(`/workorder-cost/${params.workorderId}/sync-tool-cost`, { ...params.body })
}

