/**
 * @typedef {object} projectUnreadCountListItem
 
 * @property {number} projectId 项目ID
 * @property {string} projectName 项目名称
 * @property {number} unreadCount 未读数量
 *
*/

/**
 * @typedef {object} data
 * @property {[projectUnreadCountListItem]} projectUnreadCountList
 * @property {number} unreadOfTotal 总的未读消息数
 *
*/

/**
 * @typedef {object} statisticsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/statisticsUsingGET
 * @summary 统计各项目未读站内信数
 * @description 
 * @param {object} params
 
 * @return {Promise<statisticsUsingGETResponse>}
*/
export function statisticsUsingGET() {
  return API.get(`/message/send/unread-count/statistics`, {})
}

