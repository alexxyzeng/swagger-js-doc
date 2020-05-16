/**
 * @tags workorder-tool
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-tool/updateUsingPUT_62
 * @summary 修改工单关联的工具
 * @description 
 * @param {object} params
 * @param {number} params.workorderToolId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_62(params) {
  return API.put(`/workorder-tool/${workorderToolId}`, { ...params.body })
}

/**
 * @tags workorder-tool
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-tool/removeByIdUsingDELETE_2
 * @summary 删除工单关联的工具
 * @description 
 * @param {object} params
 * @param {number} params.workorderToolId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function removeByIdUsingDELETE_2(params) {
  return API.delete(`/workorder-tool/${workorderToolId}`, {})
}

