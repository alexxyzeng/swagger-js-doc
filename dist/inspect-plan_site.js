/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/findUsingGET_24
 * @summary 巡检计划-点位-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_24(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/createUsingPOST_17
 * @summary 新增巡检计划-点位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_17(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingPUT_4
 * @summary 批量删除巡检计划-点位
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_4(params) {
  return API.put(, { ...params.body })
}

