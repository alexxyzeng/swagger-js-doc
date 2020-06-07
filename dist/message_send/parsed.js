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
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
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
 * @typedef {object} findUsingGET_48Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_34Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_34Body
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
 * @typedef {object} deleteUsingDELETE_39Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/findUsingGET_48
 * @summary 消息发送记录-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.employeeId - 员工id
* @param {string} params.query.type - 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
* @param {string} params.query.isRead - 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise<findUsingGET_48Response>}
*/
export function findUsingGET_48(params) {
  return API.get(`/message/send`, { params: { ...params.query })
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/createUsingPOST_34
 * @summary 新增消息发送记录
 * @description 
 * @param {object} params
  * @param {createUsingPOST_34Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_34Response>}
*/
export function createUsingPOST_34(params) {
  return API.post(`/message/send`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_39
 * @summary 批量删除消息发送记录
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_39Response>}
*/
export function deleteUsingDELETE_39(params) {
  return API.delete(`/message/send`, { ...params.body })
}

