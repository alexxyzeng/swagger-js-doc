/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/findByTenantIdUsingGET
 * @summary 需求配置-根据租户
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByTenantIdUsingGET(params) {
  return API.get(, {})
}

/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-config/updateByTenantUsingPUT
 * @summary 修改需求配置-根据租户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateByTenantUsingPUT(params) {
  return API.put(, { ...params.body })
}

