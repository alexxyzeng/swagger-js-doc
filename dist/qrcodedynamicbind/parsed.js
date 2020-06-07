/**
 * @typedef {object} contentItem
 
 * @property {number} bindId 绑定ID
 * @property {number} bindType 绑定类型
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
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
 * @property {number} bindId 绑定ID
 * @property {number} bindType 绑定类型
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
 *
*/

/**
 * @typedef {object} findUsingGET_52Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_39Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_39Body
 * @property {number} bindId 绑定ID
 * @property {string} bindType 绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}
 * @property {number} projectId 项目id
 * @property {number} qrcodeDynamicId 活码ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_43Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/findUsingGET_52
 * @summary 活码绑定表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_52Response>}
*/
export function findUsingGET_52(params) {
  return API.get(`/qrcodedynamicbind`, { params: { ...params.query })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/createUsingPOST_39
 * @summary 新增活码绑定表
 * @description 
 * @param {object} params
  * @param {createUsingPOST_39Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_39Response>}
*/
export function createUsingPOST_39(params) {
  return API.post(`/qrcodedynamicbind`, { ...params.body })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/deleteUsingDELETE_43
 * @summary 批量删除活码绑定表
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_43Response>}
*/
export function deleteUsingDELETE_43(params) {
  return API.delete(`/qrcodedynamicbind`, { ...params.body })
}

