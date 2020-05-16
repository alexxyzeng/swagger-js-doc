/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/readMessageUsingPUT_1
 * @summary 消息已读
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[idsItem]} params.body.ids - 消息接受人表唯一ID
 * @param {[messageIdsItem]} params.body.messageIds - 消息id
 * @param {number} params.body.projectId - 项目Id
 * @param {string} params.body.type - 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function readMessageUsingPUT_1(params) {
  return API.put(`/message/send/read`, { ...params.body })
}

