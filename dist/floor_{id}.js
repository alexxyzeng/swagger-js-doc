/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-floor/findByIdUsingGET_12
 * @summary 查找楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_12(params) {
  return API.get(`/floor/${id}`, {})
}

/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-floor/updateUsingPUT_20
 * @summary 更新楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_20(params) {
  return API.put(`/floor/${id}`, { ...params.body })
}

/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-floor/deleteUsingDELETE_16
 * @summary 删除楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_16(params) {
  return API.delete(`/floor/${id}`, { params: { params.idparams.id }})
}

