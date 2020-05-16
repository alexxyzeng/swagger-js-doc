/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/findUsingGET_9
 * @summary 需求跟进记录-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_9(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/deleteUsingDELETE_4
 * @summary 批量删除需求跟进记录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_4(params) {
  return API.delete(, { ...params.body })
}

