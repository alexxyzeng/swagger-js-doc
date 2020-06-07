/**
 * @typedef {object} unreadCountByProjectIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/unreadCountByProjectIdUsingGET
 * @summary 未读站内信数-项目
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.employeeId - 员工id
* @param {string} params.query.type - 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
* @param {string} params.query.isRead - 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise<unreadCountByProjectIdUsingGETResponse>}
*/
export function unreadCountByProjectIdUsingGET(params) {
  return API.get(`/message/send/unread-count/by-project`, { params: { ...params.query })
}

