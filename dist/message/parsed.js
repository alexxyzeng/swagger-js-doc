/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/findUsingGET_44
 * @summary 消息表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_44(params) {
  return API.get(`/message`, { params: { ...params.query })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/createUsingPOST_30
 * @summary 新增消息表
 * @description 
 * @param {object} params
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
export function createUsingPOST_30(params) {
  return API.post(`/message`, { ...params.body })
}

/**
 * @tags base-message
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-message/deleteUsingDELETE_32
 * @summary 批量删除消息表
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
export function deleteUsingDELETE_32(params) {
  return API.delete(`/message`, { ...params.body })
}

