/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-space/findUsingGET_52
 * @summary 查找空间
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_52(params) {
  return API.get(`/space/${id}`, {})
}

/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-space/updateUsingPUT_49
 * @summary 更新空间
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_49(params) {
  return API.put(`/space/${id}`, { ...params.body })
}

/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-space/deleteUsingDELETE_46
 * @summary 删除空间
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_46(params) {
  return API.delete(`/space/${id}`, { params: { params.id }})
}

