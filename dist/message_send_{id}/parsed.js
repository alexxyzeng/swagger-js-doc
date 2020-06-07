/**
 * @typedef {object} message
 * @property {string} annex 
 * @property {number} bizId 
 * @property {string} bizTable 
 * @property {string} content 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {number} id 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {number} projectId 
 * @property {string} remark 
 * @property {string} source null {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 
 * @property {number} tenantId 
 * @property {string} title 
 * @property {string} type null {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {number} version 
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {message} message 
 * @property {number} messageId 消息id
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} receiver 接收人ID
 * @property {number} sendRetry 发送次数
 * @property {string} sendStatus 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @property {string} sendTime 发送时间
 * @property {number} sender 发送人ID
 * @property {number} tenantId 租户ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_36Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_44Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_44Body
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} messageId 消息id
 * @property {number} projectId 项目ID
 * @property {number} receiver 接收人ID
 * @property {number} sendRetry 发送次数
 * @property {string} sendStatus 发送状态：0-未发送 1-已发送 {未发送=Unsent-0, 已发送=Sent-1}
 * @property {string} sendTime 发送时间
 * @property {number} sender 发送人ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_38Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/findByIdUsingGET_36
 * @summary 消息发送记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_36Response>}
*/
export function findByIdUsingGET_36(params) {
  return API.get(`/message/send/${params.id}`, {})
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/updateUsingPUT_44
 * @summary 修改消息发送记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_44Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_44Response>}
*/
export function updateUsingPUT_44(params) {
  return API.put(`/message/send/${params.id}`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_38
 * @summary 删除消息发送记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_38Response>}
*/
export function deleteUsingDELETE_38(params) {
  return API.delete(`/message/send/${params.id}`, {})
}

