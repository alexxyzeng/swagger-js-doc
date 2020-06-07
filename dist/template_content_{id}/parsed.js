/**
 * @typedef {object} data
 * @property {string} annex 附件
 * @property {string} contentCn 中文内容
 * @property {string} contentEn 英文内容
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} templateId 消息模版ID
 * @property {string} titleCn 中文标题
 * @property {string} titleEn 英文标题
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} findByIdUsingGET_43Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_52Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_52Body
 * @property {string} annex 附件
 * @property {string} contentCn 中文内容
 * @property {string} contentEn 英文内容
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} templateId 消息模版ID
 * @property {string} titleCn 中文标题
 * @property {string} titleEn 英文标题
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_52Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/findByIdUsingGET_43
 * @summary 消息模版内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_43Response>}
*/
export function findByIdUsingGET_43(params) {
  return API.get(`/template/content/${params.id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/updateUsingPUT_52
 * @summary 修改消息模版内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_52Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_52Response>}
*/
export function updateUsingPUT_52(params) {
  return API.put(`/template/content/${params.id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_52
 * @summary 删除消息模版内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_52Response>}
*/
export function deleteUsingDELETE_52(params) {
  return API.delete(`/template/content/${params.id}`, {})
}

