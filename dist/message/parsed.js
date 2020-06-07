/**
 * @typedef {object} contentItem
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 模版id
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
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 模版id
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} findUsingGET_47Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_32Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_32Body
 * @property {string} annex 附件
 * @property {number} bizId 业务ID
 * @property {string} bizTable 业务相关表名
 * @property {string} content 消息内容
 * @property {number} id 由程序分配的唯一ID
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} source 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6, 审批提醒=Approve-7}
 * @property {number} templateId 模版id
 * @property {string} title 消息标题
 * @property {string} type 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_36Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/findUsingGET_47
 * @summary 消息表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_47Response>}
*/
export function findUsingGET_47(params) {
  return API.get(`/message`, { params: { ...params.query })
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/createUsingPOST_32
 * @summary 新增消息表
 * @description 
 * @param {object} params
  * @param {createUsingPOST_32Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_32Response>}
*/
export function createUsingPOST_32(params) {
  return API.post(`/message`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_36
 * @summary 批量删除消息表
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_36Response>}
*/
export function deleteUsingDELETE_36(params) {
  return API.delete(`/message`, { ...params.body })
}

