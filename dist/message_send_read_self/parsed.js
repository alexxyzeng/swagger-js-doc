/**
 * @typedef {object} readMessageUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/readMessageUsingPUT
 * @summary 个人站内信全部已读
 * @description 
 * @param {object} params
 
 * @return {Promise<readMessageUsingPUTResponse>}
*/
export function readMessageUsingPUT() {
  return API.put(`/message/send/read/self`, {})
}

