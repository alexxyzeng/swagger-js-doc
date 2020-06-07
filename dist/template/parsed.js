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
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
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
 * @typedef {object} findUsingGET_60Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_46Response
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
 * @typedef {object} createUsingPOST_46Body
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
 * @typedef {object} deleteUsingDELETE_54Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/findUsingGET_60
 * @summary 消息模版-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_60Response>}
*/
export function findUsingGET_60(params) {
  return API.get(`/template`, { params: { ...params.query })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/createUsingPOST_46
 * @summary 新增消息模版
 * @description 
 * @param {object} params
  * @param {createUsingPOST_46Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_46Response>}
*/
export function createUsingPOST_46(params) {
  return API.post(`/template`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_54
 * @summary 批量删除消息模版
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_54Response>}
*/
export function deleteUsingDELETE_54(params) {
  return API.delete(`/template`, { ...params.body })
}

