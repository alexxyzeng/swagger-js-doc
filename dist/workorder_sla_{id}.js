/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-sla/detailUsingGET_2
 * @summary 查询sla详情信息-byId
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_2(params) {
  return API.get(`/workorder/sla/${id}`, {})
}

/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-sla/updateUsingPUT_48
 * @summary 更新sla
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_48(params) {
  return API.put(`/workorder/sla/${id}`, { ...params.body })
}

/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-sla/deleteUsingDELETE_45
 * @summary 删除sla
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_45(params) {
  return API.delete(`/workorder/sla/${id}`, {})
}

