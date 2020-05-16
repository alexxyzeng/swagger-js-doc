/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/findByIdUsingGET_33
 * @summary 消息表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_33(params) {
  return API.get(`/message/${id}`, {})
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/updateUsingPUT_41
 * @summary 修改消息表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_41(params) {
  return API.put(`/message/${id}`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_33
 * @summary 删除消息表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_33(params) {
  return API.delete(`/message/${id}`, {})
}

