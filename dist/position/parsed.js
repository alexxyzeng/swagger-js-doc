/**
 * @typedef {object} data
 * @property {string} code 岗位编码
 * @property {string} description 岗位描述
 * @property {number} id 岗位id
 * @property {number} level 岗位层级
 * @property {string} name 岗位名称
 * @property {number} parentId 上级岗位id
 * @property {number} sort 岗位排序
 *
*/

/**
 * @typedef {object} createUsingPOST_36Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_36Body
 * @property {string} code 编码
 * @property {string} description 描述
 * @property {number} id 岗位id
 * @property {number} level 层级
 * @property {string} name 岗位名称
 * @property {string} parentId 上级id
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} updateUsingPUT_45Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_45Body
 * @property {string} code 编码
 * @property {string} description 描述
 * @property {number} id 岗位id
 * @property {number} level 层级
 * @property {string} name 岗位名称
 * @property {string} parentId 上级id
 * @property {number} sort 排序
 *
*/
/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/createUsingPOST_36
 * @summary 创建岗位
 * @description 
 * @param {object} params
  * @param {createUsingPOST_36Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_36Response>}
*/
export function createUsingPOST_36(params) {
  return API.post(`/position`, { ...params.body })
}

/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/updateUsingPUT_45
 * @summary 更新岗位
 * @description 
 * @param {object} params
  * @param {updateUsingPUT_45Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_45Response>}
*/
export function updateUsingPUT_45(params) {
  return API.put(`/position`, { ...params.body })
}

