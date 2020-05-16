/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/findUsingGET_23
 * @summary 巡检计划-提醒-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_23(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/createUsingPOST_16
 * @summary 新增巡检计划-提醒
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_16(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingPUT_3
 * @summary 批量删除巡检计划-提醒
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_3(params) {
  return API.put(, { ...params.body })
}

