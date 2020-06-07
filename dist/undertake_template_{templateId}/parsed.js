/**
 * @typedef {object} inputRange
 * @property {number} ceiling 上限
 * @property {number} lower 下限
 *
*/

/**
 * @typedef {object} optionsItem
 
 * @property {boolean} isRight 选项是否正确
 * @property {string} option 选项值
 *
*/

/**
 * @typedef {object} options
 * @property {inputRange} inputRange 
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} contentsItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {string} defaultVal 默认值
 * @property {number} id 查验内容id，更新时将原id传回服务端
 * @property {options} options 
 * @property {string} unit 单位
 *
*/

/**
 * @typedef {object} data
 * @property {[contentsItem]} contents
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 模板名称
 *
*/

/**
 * @typedef {object} detailUsingGET_4Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_57Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_57Body
 * @property {[contentsItem]} contents
 * @property {string} name 模板名称
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_59Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template/detailUsingGET_4
 * @summary 承接查验模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.templateId - path
 * @return {Promise<detailUsingGET_4Response>}
*/
export function detailUsingGET_4(params) {
  return API.get(`/undertake/template/${params.templateId}`, {})
}

/**
 * @tags undertake-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template/updateUsingPUT_57
 * @summary 修改承接查验模板-部分
 * @description 
 * @param {object} params
 * @param {number} params.templateId - path
 * @param {updateUsingPUT_57Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_57Response>}
*/
export function updateUsingPUT_57(params) {
  return API.put(`/undertake/template/${params.templateId}`, { ...params.body })
}

/**
 * @tags undertake-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template/deleteUsingDELETE_59
 * @summary 删除承接查验模板
 * @description 
 * @param {object} params
 * @param {number} params.templateId - path
 * @return {Promise<deleteUsingDELETE_59Response>}
*/
export function deleteUsingDELETE_59(params) {
  return API.delete(`/undertake/template/${params.templateId}`, {})
}

