/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/findUsingGET_56
 * @summary 消息模版-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_56(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/createUsingPOST_42
 * @summary 新增消息模版
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_42(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_50
 * @summary 批量删除消息模版
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_50(params) {
  return API.delete(, { ...params.body })
}

