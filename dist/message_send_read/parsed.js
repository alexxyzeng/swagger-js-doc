/**
 * @typedef {object} readMessageUsingPUT_1Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} readMessageUsingPUT_1Body
 * @property {[number]} ids
 * @property {[number]} messageIds
 * @property {number} projectId 项目Id
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/readMessageUsingPUT_1
 * @summary 消息已读
 * @description 
 * @param {object} params
  * @param {readMessageUsingPUT_1Body} params.body - 请求体 undefined
 * @return {Promise<readMessageUsingPUT_1Response>}
*/
export function readMessageUsingPUT_1(params) {
  return API.put(`/message/send/read`, { ...params.body })
}

