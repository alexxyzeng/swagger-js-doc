/**
 * @typedef {object} contentsItem
 * @property {string} type null {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {string} annex 
 * @property {string} contentCn 
 * @property {string} contentEn 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {number} id 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {number} projectId 
 * @property {string} remark 
 * @property {number} templateId 
 * @property {number} tenantId 
 * @property {string} titleCn 
 * @property {string} titleEn 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} paramsItem
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 *
*/

/**
 * @typedef {object} data
 * @property {string} code 消息模版编码
 * @property {[contentsItem]} contents
 * @property {string} createTime 创建时间
 * @property {string} depict 消息模版描述
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {[paramsItem]} params
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} findByIdUsingGET_44Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_53Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} content
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
 * @typedef {object} updateUsingPUT_53Body
 * @property {string} code 消息模版编码
 * @property {content} content 
 * @property {string} depict 消息模版描述
 * @property {number} id 唯一id
 * @property {[paramsItem]} params
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_53Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/findByIdUsingGET_44
 * @summary 消息模版-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_44Response>}
*/
export function findByIdUsingGET_44(params) {
  return API.get(`/template/${params.id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/updateUsingPUT_53
 * @summary 修改消息模版-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_53Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_53Response>}
*/
export function updateUsingPUT_53(params) {
  return API.put(`/template/${params.id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_53
 * @summary 删除消息模版
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_53Response>}
*/
export function deleteUsingDELETE_53(params) {
  return API.delete(`/template/${params.id}`, {})
}

