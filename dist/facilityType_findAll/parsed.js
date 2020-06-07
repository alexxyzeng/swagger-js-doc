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
 * @typedef {object} dataItem
 
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
 * @typedef {object} findAllUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/findAllUsingGET_1
 * @summary 查询所有设施分类
 * @description 
 * @param {object} params
 
 * @return {Promise<findAllUsingGET_1Response>}
*/
export function findAllUsingGET_1() {
  return API.get(`/facilityType/findAll`, {})
}

