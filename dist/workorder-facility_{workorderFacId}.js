/**
 * @tags workorder-facility
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-facility/updateUsingPUT_60
 * @summary 修改工单对应的设备
 * @description 
 * @param {object} params
 * @param {number} params.workorderFacId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_60(params) {
  return API.put(`/workorder-facility/${workorderFacId}`, { ...params.body })
}

/**
 * @tags workorder-facility
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-facility/removeByIdUsingDELETE
 * @summary 删除工单对应的设备
 * @description 
 * @param {object} params
 * @param {number} params.workorderFacId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function removeByIdUsingDELETE(params) {
  return API.delete(`/workorder-facility/${workorderFacId}`, {})
}

