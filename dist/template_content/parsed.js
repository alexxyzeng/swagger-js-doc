/**
 * @typedef {object} contentItem
 * @property {string} type 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
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
 * @typedef {object} findUsingGET_59Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_45Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_45Body
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
 * @typedef {object} deleteUsingDELETE_51Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/findUsingGET_59
 * @summary 消息模版内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_59Response>}
*/
export function findUsingGET_59(params) {
  return API.get(`/template/content`, { params: { ...params.query })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/createUsingPOST_45
 * @summary 新增消息模版内容
 * @description 
 * @param {object} params
  * @param {createUsingPOST_45Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_45Response>}
*/
export function createUsingPOST_45(params) {
  return API.post(`/template/content`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_51
 * @summary 批量删除消息模版内容
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_51Response>}
*/
export function deleteUsingDELETE_51(params) {
  return API.delete(`/template/content`, { ...params.body })
}

