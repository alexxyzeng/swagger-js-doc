/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/findUsingGET_45
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_45(params) {
  return API.get(`/message/send`, { params: { ...params.query })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/createUsingPOST_31
 * @summary 新增消息发送记录
 * @description 
 * @param {object} params
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
export function createUsingPOST_31(params) {
  return API.post(`/message/send`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/deleteUsingDELETE_35
 * @summary 批量删除消息发送记录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_35(params) {
  return API.delete(`/message/send`, { ...params.body })
}

