/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-cost/updateUsingPUT_59
 * @summary 修改费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderCostId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_59(params) {
  return API.put(`/workorder-cost/${workorderCostId}`, { ...params.body })
}

/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-cost/deleteUsingDELETE_59
 * @summary 删除费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderCostId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_59(params) {
  return API.delete(`/workorder-cost/${workorderCostId}`, {})
}

