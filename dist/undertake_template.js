/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-template/findUsingGET_61
 * @summary 承接查验模板-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_61(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags undertake-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-template/createUsingPOST_46
 * @summary 新增承接查验模板
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_46(params) {
  return API.post(, { ...params.body })
}

