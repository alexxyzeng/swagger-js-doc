/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/findUsingGET_43
 * @summary 库存物资-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_43(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/createUsingPOST_29
 * @summary 新增库存物资
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_29(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingPUT_11
 * @summary 批量删除库存物资
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_11(params) {
  return API.put(, { ...params.body })
}

