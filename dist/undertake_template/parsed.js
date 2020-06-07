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
 * @typedef {object} contentItem
 
 * @property {[contentsItem]} contents
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 模板名称
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
 * @property {[contentsItem]} contents
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 模板名称
 *
*/

/**
 * @typedef {object} findUsingGET_65Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_50Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_50Body
 * @property {[contentsItem]} contents
 * @property {string} name 模板名称
 *
*/
/**
 * @tags undertake-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template/findUsingGET_65
 * @summary 承接查验模板-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - 模版id
* @param {string} params.query.name - 模版名称
 * @return {Promise<findUsingGET_65Response>}
*/
export function findUsingGET_65(params) {
  return API.get(`/undertake/template`, { params: { ...params.query })
}

/**
 * @tags undertake-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-template/createUsingPOST_50
 * @summary 新增承接查验模板
 * @description 
 * @param {object} params
  * @param {createUsingPOST_50Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_50Response>}
*/
export function createUsingPOST_50(params) {
  return API.post(`/undertake/template`, { ...params.body })
}

