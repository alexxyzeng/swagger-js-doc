/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findByIdUsingGET_8
 * @summary 需求类型-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_8(params) {
  return API.get(`/demand/type/${id}`, {})
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/updateUsingPUT_9
 * @summary 修改需求类型-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_9(params) {
  return API.put(`/demand/type/${id}`, { ...params.body })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_6
 * @summary 删除需求类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_6(params) {
  return API.delete(`/demand/type/${id}`, {})
}

