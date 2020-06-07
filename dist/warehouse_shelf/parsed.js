/**
 * @typedef {object} contentItem
 
 * @property {string} code 货架编码
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 货架名称
 * @property {number} projectId 项目id
 * @property {string} warehouseCode 仓库code
 * @property {number} warehouseId 仓库ID
 * @property {string} warehouseName 仓库名称
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
 * @property {string} code 货架编码
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 货架名称
 * @property {number} projectId 项目id
 * @property {string} warehouseCode 仓库code
 * @property {number} warehouseId 仓库ID
 * @property {string} warehouseName 仓库名称
 *
*/

/**
 * @typedef {object} findUsingGET_67Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_52Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_52Body
 * @property {string} name 货架名称
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findUsingGET_67
 * @summary 仓库货架-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.warehouseId - 仓库Id
* @param {string} params.query.warehouseCode - 仓库code
* @param {string} params.query.warehouseName - 仓库名称
* @param {string} params.query.code - 货架编码
* @param {string} params.query.name - 货架名称
 * @return {Promise<findUsingGET_67Response>}
*/
export function findUsingGET_67(params) {
  return API.get(`/warehouse/shelf`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/createUsingPOST_52
 * @summary 新增仓库货架
 * @description 
 * @param {object} params
  * @param {createUsingPOST_52Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_52Response>}
*/
export function createUsingPOST_52(params) {
  return API.post(`/warehouse/shelf`, { ...params.body })
}

