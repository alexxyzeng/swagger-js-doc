/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/findByIdUsingGET_33
 * @summary 消息表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_33(params) {
  return API.get(`/message/${params.id}`, {})
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/updateUsingPUT_41
 * @summary 修改消息表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.annex - 附件
 * @param {number} params.body.bizId - 业务ID
 * @param {string} params.body.bizTable - 业务相关表名
 * @param {string} params.body.content - 消息内容
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {number} params.body.projectId - 项目ID
 * @param {string} params.body.remark - 备注
 * @param {string} params.body.source - 消息来源：1-需求 2-工单 3-预防性维护 {需求=Demand-1, 工单=Workorder-2, 预防性维护=PM-3, 巡检=Inspect-4, 库存=Stock-5, cmb员工服务平台=CmbDemand-6}
 * @param {number} params.body.templateId - 模版id
 * @param {string} params.body.title - 消息标题
 * @param {string} params.body.type - 消息类型:1-站内信 2-移动推送 3-短信 4-邮件 5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_41(params) {
  return API.put(`/message/${params.id}`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/deleteUsingDELETE_33
 * @summary 删除消息表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_33(params) {
  return API.delete(`/message/${params.id}`, {})
}

