/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/findByIdUsingGET_34
 * @summary 消息发送记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_34(params) {
  return API.get(`/message/send/${id}`, {})
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/updateUsingPUT_42
 * @summary 修改消息发送记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_42(params) {
  return API.put(`/message/send/${id}`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_34
 * @summary 删除消息发送记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_34(params) {
  return API.delete(`/message/send/${id}`, {})
}

