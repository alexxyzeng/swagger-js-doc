/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility/findByIdUsingGET_11
 * @summary 设备台帐-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_11(params) {
  return API.get(`/facility/${id}`, {})
}

/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility/updateUsingPUT_15
 * @summary 修改设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_15(params) {
  return API.put(`/facility/${id}`, { ...params.body })
}

/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility/deleteUsingDELETE_11
 * @summary 删除设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_11(params) {
  return API.delete(`/facility/${id}`, {})
}

