/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findUsingGET_11
 * @summary 需求类型-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_11(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/createUsingPOST_5
 * @summary 新增需求类型
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_5(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_7
 * @summary 批量删除需求类型
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_7(params) {
  return API.delete(, { ...params.body })
}

