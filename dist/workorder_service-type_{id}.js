/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-service-type/findByIdUsingGET_39
 * @summary 查询服务类型-byId
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_39(params) {
  return API.get(`/workorder/service-type/${id}`, {})
}

/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-service-type/updateUsingPUT_47
 * @summary 更新服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_47(params) {
  return API.put(`/workorder/service-type/${id}`, { ...params.body })
}

/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-service-type/deleteUsingDELETE_43
 * @summary 删除服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_43(params) {
  return API.delete(`/workorder/service-type/${id}`, {})
}

