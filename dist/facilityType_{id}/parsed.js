/**
 * @typedef {object} getSplicingCodeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

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
 * @typedef {object} updateUsingPUT_20Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_20Body
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
 * @typedef {object} deleteUsingDELETE_18Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/getSplicingCodeUsingGET
 * @summary 拼接设施编码
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<getSplicingCodeUsingGETResponse>}
*/
export function getSplicingCodeUsingGET(params) {
  return API.get(`/facilityType/${params.id}`, {})
}

/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/updateUsingPUT_20
 * @summary 修改设施分类
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_20Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_20Response>}
*/
export function updateUsingPUT_20(params) {
  return API.put(`/facilityType/${params.id}`, { ...params.body })
}

/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/deleteUsingDELETE_18
 * @summary 根据id删除设施分类
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_18Response>}
*/
export function deleteUsingDELETE_18(params) {
  return API.delete(`/facilityType/${params.id}`, {})
}

