/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/findUsingGET_55
 * @summary 消息模版内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_55(params) {
  return API.get(`/template/content`, { params: { ...params.query })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/createUsingPOST_41
 * @summary 新增消息模版内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.annex - 附件
 * @param {string} params.body.contentCn - 中文内容
 * @param {string} params.body.contentEn - 英文内容
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.templateId - 消息模版ID
 * @param {string} params.body.titleCn - 中文标题
 * @param {string} params.body.titleEn - 英文标题
 * @param {string} params.body.type - 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_41(params) {
  return API.post(`/template/content`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/deleteUsingDELETE_47
 * @summary 批量删除消息模版内容
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
export function deleteUsingDELETE_47(params) {
  return API.delete(`/template/content`, { ...params.body })
}

