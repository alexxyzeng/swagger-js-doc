/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/findByIdUsingGET_40
 * @summary 消息模版内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_40(params) {
  return API.get(`/template/content/${id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/updateUsingPUT_50
 * @summary 修改消息模版内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_50(params) {
  return API.put(`/template/content/${id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_48
 * @summary 删除消息模版内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_48(params) {
  return API.delete(`/template/content/${id}`, {})
}

