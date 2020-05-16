/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/findUsingGET_45
 * @summary 消息发送记录-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_45(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/createUsingPOST_31
 * @summary 新增消息发送记录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_31(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_35
 * @summary 批量删除消息发送记录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_35(params) {
  return API.delete(, { ...params.body })
}

