/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/findUsingGET_22
 * @summary 巡检计划-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_22(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/createUsingPOST_15
 * @summary 新增巡检计划
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_15(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingPUT_2
 * @summary 批量删除巡检计划
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_2(params) {
  return API.put(, { ...params.body })
}

