/**
 * @typedef {object} unreadCountByTenantIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/unreadCountByTenantIdUsingGET
 * @summary 未读站内信数-租户
 * @description 
 * @param {object} params
 
 * @return {Promise<unreadCountByTenantIdUsingGETResponse>}
*/
export function unreadCountByTenantIdUsingGET() {
  return API.get(`/message/send/unread-count/by-tenant`, {})
}

