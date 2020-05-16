/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-cost/updateUsingPUT_59
 * @summary 修改费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderCostId - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.cost - 花费
 * @param {string} params.body.description - 描述
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.name - 收费项名称
 * @param {number} params.body.projectId - 项目ID
 * @param {number} params.body.woWorkorderId - 工单id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_59(params) {
  return API.put(`/workorder-cost/${params.workorderCostId}`, { ...params.body })
}

/**
 * @tags workorder-cost
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-cost/deleteUsingDELETE_59
 * @summary 删除费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderCostId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_59(params) {
  return API.delete(`/workorder-cost/${params.workorderCostId}`, {})
}

