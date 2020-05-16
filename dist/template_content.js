/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/findUsingGET_55
 * @summary 消息模版内容-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_55(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/createUsingPOST_41
 * @summary 新增消息模版内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_41(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_47
 * @summary 批量删除消息模版内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_47(params) {
  return API.delete(, { ...params.body })
}

