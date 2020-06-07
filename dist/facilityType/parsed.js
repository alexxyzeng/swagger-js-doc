/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} childrenItem
 
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
 * @typedef {object} createUsingPOST_12Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_12Body
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
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/createUsingPOST_12
 * @summary 新增设施分类
 * @description 
 * @param {object} params
  * @param {createUsingPOST_12Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_12Response>}
*/
export function createUsingPOST_12(params) {
  return API.post(`/facilityType`, { ...params.body })
}

