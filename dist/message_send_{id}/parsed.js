/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/findByIdUsingGET_34
 * @summary 消息发送记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_34(params) {
  return API.get(`/message/send/${params.id}`, {})
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/updateUsingPUT_42
 * @summary 修改消息发送记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.isRead - 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.messageId - 消息id
 * @param {number} params.body.projectId - 项目ID
 * @param {number} params.body.receiver - 接收人ID
 * @param {number} params.body.sendRetry - 发送次数
 * @param {string} params.body.sendStatus - 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @param {string} params.body.sendTime - 发送时间
 * @param {number} params.body.sender - 发送人ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_42(params) {
  return API.put(`/message/send/${params.id}`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/deleteUsingDELETE_34
 * @summary 删除消息发送记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_34(params) {
  return API.delete(`/message/send/${params.id}`, {})
}

