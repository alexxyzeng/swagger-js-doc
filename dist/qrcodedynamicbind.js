/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/findUsingGET_49
 * @summary 活码绑定表-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_49(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/createUsingPOST_36
 * @summary 新增活码绑定表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_36(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/deleteUsingDELETE_39
 * @summary 批量删除活码绑定表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_39(params) {
  return API.delete(, { ...params.body })
}

