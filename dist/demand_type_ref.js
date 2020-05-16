/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findUsingGET_13
 * @summary 需求类型关联-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_13(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_9
 * @summary 批量删除需求类型关联
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_9(params) {
  return API.delete(, { ...params.body })
}

