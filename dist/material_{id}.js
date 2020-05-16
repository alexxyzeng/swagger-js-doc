/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/findByIdUsingGET_32
 * @summary 库存物资-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_32(params) {
  return API.get(`/material/${id}`, { params: { params.id }})
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/updateUsingPUT_40
 * @summary 修改库存物资-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_40(params) {
  return API.put(`/material/${id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingDELETE_31
 * @summary 删除库存物资
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_31(params) {
  return API.delete(`/material/${id}`, {})
}

