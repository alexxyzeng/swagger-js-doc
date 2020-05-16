/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/findByIdUsingGET_28
 * @summary 巡检模板-内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_28(params) {
  return API.get(`/inspect-template/content/${id}`, {})
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/updateUsingPUT_36
 * @summary 修改巡检模板-内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_36(params) {
  return API.put(`/inspect-template/content/${id}`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/deleteUsingDELETE_26
 * @summary 删除巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_26(params) {
  return API.delete(`/inspect-template/content/${id}`, {})
}

