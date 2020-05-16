/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-building/findByIdUsingGET
 * @summary 查找房产
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET(params) {
  return API.get(`/building/${id}`, {})
}

/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-building/updateUsingPUT
 * @summary 更新房产
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT(params) {
  return API.put(`/building/${id}`, { ...params.body })
}

/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-building/deleteUsingDELETE
 * @summary 删除房产
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE(params) {
  return API.delete(`/building/${id}`, {})
}

