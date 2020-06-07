/**
 * @typedef {object} dataItem
 
 *
*/

/**
 * @typedef {object} findAllMenusUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-menu
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-menu/findAllMenusUsingGET
 * @summary 显示所有菜单
 * @description 
 * @param {object} params
 
 * @return {Promise<findAllMenusUsingGETResponse>}
*/
export function findAllMenusUsingGET() {
  return API.get(`/enterprisemenu/findAllMenus`, {})
}

