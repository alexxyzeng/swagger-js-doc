/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/findUsingGET_50
 * @summary 活码表-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_50(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/createUsingPOST_37
 * @summary 新增活码表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_37(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/deleteUsingDELETE_41
 * @summary 批量删除活码表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_41(params) {
  return API.delete(, { ...params.body })
}

