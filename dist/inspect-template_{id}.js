/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/findByIdUsingGET_29
 * @summary 巡检模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_29(params) {
  return API.get(`/inspect-template/${id}`, {})
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/updateUsingPUT_37
 * @summary 修改巡检模板-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_37(params) {
  return API.put(`/inspect-template/${id}`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/deleteUsingDELETE_27
 * @summary 删除巡检模板
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_27(params) {
  return API.delete(`/inspect-template/${id}`, {})
}

