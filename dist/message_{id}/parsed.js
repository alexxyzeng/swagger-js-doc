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
 * @typedef {object} findByIdUsingGET_35Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_43Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_43Body
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
 * @typedef {object} deleteUsingDELETE_37Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/findByIdUsingGET_35
 * @summary 消息表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_35Response>}
*/
export function findByIdUsingGET_35(params) {
  return API.get(`/message/${params.id}`, {})
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/updateUsingPUT_43
 * @summary 修改消息表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_43Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_43Response>}
*/
export function updateUsingPUT_43(params) {
  return API.put(`/message/${params.id}`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-message/deleteUsingDELETE_37
 * @summary 删除消息表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_37Response>}
*/
export function deleteUsingDELETE_37(params) {
  return API.delete(`/message/${params.id}`, {})
}

