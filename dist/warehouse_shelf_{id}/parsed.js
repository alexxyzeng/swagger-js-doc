/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findByIdUsingGET_45
 * @summary 仓库货架-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_45(params) {
  return API.get(`/warehouse/shelf/${params.id}`, {})
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/updateUsingPUT_57
 * @summary 修改仓库货架-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.name - 货架名称
 * @param {number} params.body.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_57(params) {
  return API.put(`/warehouse/shelf/${params.id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/deleteUsingDELETE_57
 * @summary 删除仓库货架
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_57(params) {
  return API.delete(`/warehouse/shelf/${params.id}`, {})
}

