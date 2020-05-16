/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/findByIdUsingGET_40
 * @summary 消息模版内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_40(params) {
  return API.get(`/template/content/${params.id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/updateUsingPUT_50
 * @summary 修改消息模版内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_50(params) {
  return API.put(`/template/content/${params.id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/deleteUsingDELETE_48
 * @summary 删除消息模版内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_48(params) {
  return API.delete(`/template/content/${params.id}`, {})
}

