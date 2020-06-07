/**
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

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
 * @typedef {object} findUsingGET_62Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_48Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_48Body
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
 * @typedef {object} deleteUsingDELETE_58Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/findUsingGET_62
 * @summary 第三方账户-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.pageNumber - 当前页
* @param {number} params.query.pageSize - 每页条数
* @param {[string]} params.query.pageSort - 排序
 * @return {Promise<findUsingGET_62Response>}
*/
export function findUsingGET_62(params) {
  return API.get(`/thirdpartysystemconfig`, { params: { ...params.query })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/createUsingPOST_48
 * @summary 新增第三方账户
 * @description 
 * @param {object} params
  * @param {createUsingPOST_48Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_48Response>}
*/
export function createUsingPOST_48(params) {
  return API.post(`/thirdpartysystemconfig`, { ...params.body })
}

/**
 * @tags thirdparty-system-config-feign
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/thirdparty-system-config-feign/deleteUsingDELETE_58
 * @summary 批量删除第三方账户
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_58Response>}
*/
export function deleteUsingDELETE_58(params) {
  return API.delete(`/thirdpartysystemconfig`, { ...params.body })
}

