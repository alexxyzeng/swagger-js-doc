/**
 * @typedef {object} contentItem
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {number} bizId 业务ID
 * @property {string} content 消息内容
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRead 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} messageId 消息ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} source 消息来源 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {string} title 消息标题
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
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findSelfUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/findSelfUsingGET
 * @summary 个人通知信息列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.type - 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
* @param {string} params.query.sendTimeStart - 发送时间开始
* @param {string} params.query.sendTimeEnd - 发送时间结束
* @param {string} params.query.content - 消息内容
* @param {string} params.query.isRead - 是否已读 0-未读 1-已读 是否枚举{否=No-0, 是=Yes-1}
* @param {string} params.query.source - 消息来源 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @return {Promise<findSelfUsingGETResponse>}
*/
export function findSelfUsingGET(params) {
  return API.get(`/message/send/self`, { params: { ...params.query })
}

