/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/findByIdUsingGET_43
 * @summary 第三方账户-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_43(params) {
  return API.get(`/thirdpartysystemconfig/${id}`, {})
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/updateUsingPUT_53
 * @summary 修改第三方账户-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_53(params) {
  return API.put(`/thirdpartysystemconfig/${id}`, { ...params.body })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/deleteUsingDELETE_53
 * @summary 删除第三方账户
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_53(params) {
  return API.delete(`/thirdpartysystemconfig/${id}`, {})
}

