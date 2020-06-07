/**
 * @typedef {object} data
 
 *
*/

/**
 * @typedef {object} searchUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/searchUsingGET_2
 * @summary 查找岗位列表
 * @description 
 * @param {object} params
 
 * @return {Promise<searchUsingGET_2Response>}
*/
export function searchUsingGET_2() {
  return API.get(`/position/search`, {})
}

