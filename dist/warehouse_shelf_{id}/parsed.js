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
 * @typedef {object} findByIdUsingGET_48Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_59Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_59Body
 * @property {string} name 货架名称
 * @property {number} warehouseId 仓库ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_61Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findByIdUsingGET_48
 * @summary 仓库货架-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_48Response>}
*/
export function findByIdUsingGET_48(params) {
  return API.get(`/warehouse/shelf/${params.id}`, {})
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/updateUsingPUT_59
 * @summary 修改仓库货架-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_59Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_59Response>}
*/
export function updateUsingPUT_59(params) {
  return API.put(`/warehouse/shelf/${params.id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingDELETE_61
 * @summary 删除仓库货架
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_61Response>}
*/
export function deleteUsingDELETE_61(params) {
  return API.delete(`/warehouse/shelf/${params.id}`, {})
}

