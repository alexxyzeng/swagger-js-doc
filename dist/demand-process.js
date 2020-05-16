/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findUsingGET_6
 * @summary 需求处理记录-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_6(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/deleteUsingDELETE_2
 * @summary 批量删除需求处理记录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_2(params) {
  return API.delete(, { ...params.body })
}

