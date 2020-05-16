/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-config/initByTenantUsingPUT
 * @summary 初始化需求配置-根据租户
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function initByTenantUsingPUT(params) {
  return API.put(`/demand/config/init-by-tenant`, {})
}

