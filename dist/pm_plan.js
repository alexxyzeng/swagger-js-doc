/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm-plan/createUsingPOST_28
 * @summary 新增计划
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_28(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm-plan/deleteUsingDELETE_30
 * @summary 删除计划
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_30(params) {
  return API.delete(, { params: { params.idparams.idparams.id }})
}

