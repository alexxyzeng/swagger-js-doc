/**
 * @typedef {object} data
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} createTime 创建时间
 * @property {string} creatorName 创建者姓名
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifierName 最后的修改者姓名
 * @property {string} modifyTime 
 * @property {number} status 
 *
*/

/**
 * @typedef {object} findByIdUsingGET_46Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_55Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_55Body
 * @property {number} appId 应用ID，做数据隔离用
 * @property {number} bizId 业务ID，做数据隔离用
 * @property {string} code 枚举值大写字母  DINGTALK WECHAT YISHITONG
 * @property {string} config 第三方信息
 * @property {string} displayname 中文描述 钉钉 微信 一事通
 * @property {number} id 由程序分配的唯一ID
 * @property {number} status 
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_57Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/findByIdUsingGET_46
 * @summary 第三方账户-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_46Response>}
*/
export function findByIdUsingGET_46(params) {
  return API.get(`/thirdpartysystemconfig/${params.id}`, {})
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/updateUsingPUT_55
 * @summary 修改第三方账户-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_55Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_55Response>}
*/
export function updateUsingPUT_55(params) {
  return API.put(`/thirdpartysystemconfig/${params.id}`, { ...params.body })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/deleteUsingDELETE_57
 * @summary 删除第三方账户
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_57Response>}
*/
export function deleteUsingDELETE_57(params) {
  return API.delete(`/thirdpartysystemconfig/${params.id}`, {})
}

