/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm/findByIdUsingGET_31
 * @summary 维保规则-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_31(params) {
  return API.get(`/pm/maint/${id}`, {})
}

/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm/updateUsingPUT_39
 * @summary 修改设置
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_39(params) {
  return API.put(`/pm/maint/${id}`, { ...params.body })
}

/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm/deleteUsingDELETE_29
 * @summary 删除设置
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_29(params) {
  return API.delete(`/pm/maint/${id}`, {})
}

