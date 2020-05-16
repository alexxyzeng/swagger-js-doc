/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/findUsingGET_57
 * @summary 消息模版参数-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_57(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/createUsingPOST_43
 * @summary 新增消息模版参数
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_43(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_51
 * @summary 批量删除消息模版参数
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_51(params) {
  return API.delete(, { ...params.body })
}

