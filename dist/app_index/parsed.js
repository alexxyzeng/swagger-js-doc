/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} data
 
 
 
 * @property {enum} enum 
 
 *
*/

/**
 * @typedef {object} appIndexUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data null
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags app-index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/appIndexUsingGET
 * @summary app首页查询
 * @description 
 * @param {object} params
 
 * @return {Promise<appIndexUsingGETResponse>}
*/
export function appIndexUsingGET(params) {
  return API.get(`/app/index`, {})
}

