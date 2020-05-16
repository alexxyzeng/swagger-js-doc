/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findUsingGET_2
 * @summary 需求追加处理记录-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_2(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/createUsingPOST_2
 * @summary 新增需求追加处理记录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_2(params) {
  return API.post(, { ...params.body })
}

