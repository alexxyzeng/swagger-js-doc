/**
 * @tags base-menu
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-menu/findUsingGET_16
 * @summary 根据企业查询菜单
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.tenantId - tenantId
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_16(params) {
  return API.get(`/enterprisemenu`, { params: { ...params.query })
}

/**
 * @tags base-menu
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-menu/updateUsingPUT_13
 * @summary 修改企业菜单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[permissionIdItem]} params.body.permissionId - 权限id
 * @param {number} params.body.tenantId - tenantId
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_13(params) {
  return API.put(`/enterprisemenu`, { ...params.body })
}

