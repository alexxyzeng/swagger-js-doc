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
 * @typedef {object} findByIdUsingGET_45Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_54Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_54Body
 * @property {string} depict 参数描述
 * @property {number} id 唯一id
 * @property {string} param 参数
 * @property {number} projectId 项目id
 * @property {number} templateId 消息模版ID
 * @property {string} type 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_56Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/findByIdUsingGET_45
 * @summary 消息模版参数-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_45Response>}
*/
export function findByIdUsingGET_45(params) {
  return API.get(`/template/param/${params.id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/updateUsingPUT_54
 * @summary 修改消息模版参数-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_54Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_54Response>}
*/
export function updateUsingPUT_54(params) {
  return API.put(`/template/param/${params.id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/template/deleteUsingDELETE_56
 * @summary 删除消息模版参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_56Response>}
*/
export function deleteUsingDELETE_56(params) {
  return API.delete(`/template/param/${params.id}`, {})
}

