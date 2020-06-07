/**
 * @typedef {object} dataItem
 
 * @property {string} ext 扩展属性
 * @property {number} id ID
 * @property {number} isLeaf 是否叶节点 1. 是
 * @property {number} level 层级
 * @property {string} name 显示名称
 * @property {number} parentId 上级
 * @property {string} path 完整路径
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} findByLevelAndParentIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-geo
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-geo/findByLevelAndParentIdUsingGET
 * @summary 根据level parentId 得到行政区划列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.parentId - 父ID
* @param {number} params.query.Level - 层级
 * @return {Promise<findByLevelAndParentIdUsingGETResponse>}
*/
export function findByLevelAndParentIdUsingGET(params) {
  return API.get(`/geo/searchByLevelAndParentId`, { params: { ...params.query })
}

