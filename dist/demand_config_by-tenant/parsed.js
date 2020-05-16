/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-config/findByTenantIdUsingGET
 * @summary 需求配置-根据租户
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByTenantIdUsingGET(params) {
  return API.get(`/demand/config/by-tenant`, {})
}

/**
 * @tags service-center-demand-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-config/updateByTenantUsingPUT
 * @summary 修改需求配置-根据租户
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.autoAffirm - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {undefined} params.body.noticeSet - undefined
 * @param {undefined} params.body.satisfactionSet - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateByTenantUsingPUT(params) {
  return API.put(`/demand/config/by-tenant`, { ...params.body })
}

