/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/findByIdUsingGET_42
 * @summary 消息模版参数-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_42(params) {
  return API.get(`/template/param/${params.id}`, {})
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/updateUsingPUT_52
 * @summary 修改消息模版参数-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.depict - 参数描述
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.param - 参数
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.templateId - 消息模版ID
 * @param {string} params.body.type - 消息类型 {站内信=Web-1, 移动推送=Mobile-2, 短信=Msg-3, 邮件=Email-4, 公告=Bulletin-5}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_52(params) {
  return API.put(`/template/param/${params.id}`, { ...params.body })
}

/**
 * @tags template
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/template/deleteUsingDELETE_52
 * @summary 删除消息模版参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_52(params) {
  return API.delete(`/template/param/${params.id}`, {})
}

