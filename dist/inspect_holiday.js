/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/findUsingGET_21
 * @summary 巡检节假日-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_21(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/createUsingPOST_14
 * @summary 新增巡检节假日
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_14(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags inspect
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect/deleteUsingPUT_1
 * @summary 批量删除巡检节假日
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_1(params) {
  return API.put(, { ...params.body })
}

