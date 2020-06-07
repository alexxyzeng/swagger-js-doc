/**
 * @typedef {object} permissionItem
 
 *
*/

/**
 * @typedef {object} data
 * @property {[permissionItem]} permission
 * @property {number} tenantId 企业id
 *
*/

/**
 * @typedef {object} findUsingGET_19Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_15Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_15Body
 * @property {[number]} permissionId
 * @property {number} tenantId tenantId
 *
*/
/**
 * @tags base-menu
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-menu/findUsingGET_19
 * @summary 根据企业查询菜单
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.tenantId - tenantId
 * @return {Promise<findUsingGET_19Response>}
*/
export function findUsingGET_19(params) {
  return API.get(`/enterprisemenu`, { params: { ...params.query })
}

/**
 * @tags base-menu
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-menu/updateUsingPUT_15
 * @summary 修改企业菜单
 * @description 
 * @param {object} params
  * @param {updateUsingPUT_15Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_15Response>}
*/
export function updateUsingPUT_15(params) {
  return API.put(`/enterprisemenu`, { ...params.body })
}

