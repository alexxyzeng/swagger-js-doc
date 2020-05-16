/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/findUsingGET_40
 * @summary 巡检模板-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_40(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/createUsingPOST_26
 * @summary 新增巡检模板
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_26(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-template/deleteUsingPUT_10
 * @summary 批量删除巡检模板
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_10(params) {
  return API.put(, { ...params.body })
}

