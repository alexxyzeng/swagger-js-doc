/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/findByIdUsingGET_42
 * @summary 消息模版参数-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_42(params) {
  return API.get(`/template/param/${id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/updateUsingPUT_52
 * @summary 修改消息模版参数-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_52(params) {
  return API.put(`/template/param/${id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_52
 * @summary 删除消息模版参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_52(params) {
  return API.delete(`/template/param/${id}`, {})
}

