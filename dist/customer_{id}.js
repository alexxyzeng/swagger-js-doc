/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-customer/findByIdUsingGET_1
 * @summary 查询客户信息-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_1(params) {
  return API.get(`/customer/${id}`, {})
}

/**
 * @tags base-customer
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-customer/deleteUsingDELETE_1
 * @summary 删除客户信息
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_1(params) {
  return API.delete(`/customer/${id}`, {})
}

