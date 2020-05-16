/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/findByIdUsingGET_44
 * @summary 库存仓库-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_44(params) {
  return API.get(`/warehouse/${id}`, {})
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/updateUsingPUT_56
 * @summary 修改库存仓库-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_56(params) {
  return API.put(`/warehouse/${id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingDELETE_56
 * @summary 删除库存仓库
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_56(params) {
  return API.delete(`/warehouse/${id}`, {})
}

