/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} childrenItem
 
 
 
 * @property {enum} enum 
 
 *
*/

/**
 * @typedef {object} data
 * @property {[childrenItem]} children
 * @property {string} fullName 设施分类全称
 * @property {number} id 设施分类id
 * @property {number} parentId 上级id
 * @property {number} projectId 项目ID
 * @property {number} sort 排序字段
 * @property {string} typeCode 设施分类编码
 * @property {string} typeName 设施分类名称
 *
*/

/**
 * @typedef {object} findUsingGET_21Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/findUsingGET_21
 * @summary 查询设施分类
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise<findUsingGET_21Response>}
*/
export function findUsingGET_21(params) {
  return API.get(`/facilityType/find`, { params: { ...params.query })
}

