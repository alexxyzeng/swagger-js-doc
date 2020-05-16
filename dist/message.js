/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/findUsingGET_44
 * @summary 消息表-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_44(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/createUsingPOST_30
 * @summary 新增消息表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_30(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_32
 * @summary 批量删除消息表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_32(params) {
  return API.delete(, { ...params.body })
}

