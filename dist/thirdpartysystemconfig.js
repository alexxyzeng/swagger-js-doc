/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/findUsingGET_58
 * @summary 第三方账户-列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_58(params) {
  return API.get(, { params: { params.idparams.idparams.idparams.id }})
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/createUsingPOST_44
 * @summary 新增第三方账户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_44(params) {
  return API.post(, { ...params.body })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/deleteUsingDELETE_54
 * @summary 批量删除第三方账户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_54(params) {
  return API.delete(, { ...params.body })
}

