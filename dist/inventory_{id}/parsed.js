/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findByIdUsingGET_30
 * @summary 库存-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_30(params) {
  return API.get(`/inventory/${params.id}`, {})
}

/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/deleteUsingDELETE_28
 * @summary 删除库存
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_28(params) {
  return API.delete(`/inventory/${params.id}`, {})
}

