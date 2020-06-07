/**
 * @typedef {object} contentItem
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @property {string} createTime 创建时间
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
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
 * @property {string} createTime 创建时间
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} findUsingGET_61Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_47Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_47Body
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_55Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/findUsingGET_61
 * @summary 消息模版参数-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_61Response>}
*/
export function findUsingGET_61(params) {
  return API.get(`/template/param`, { params: { ...params.query })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/createUsingPOST_47
 * @summary 新增消息模版参数
 * @description 
 * @param {object} params
  * @param {createUsingPOST_47Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_47Response>}
*/
export function createUsingPOST_47(params) {
  return API.post(`/template/param`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_55
 * @summary 批量删除消息模版参数
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_55Response>}
*/
export function deleteUsingDELETE_55(params) {
  return API.delete(`/template/param`, { ...params.body })
}

