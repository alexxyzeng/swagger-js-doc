/**
 * @typedef {object} data
 
 *
*/

/**
 * @typedef {object} getTreeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/getTreeUsingGET
 * @summary 工作组列表树形结构
 * @description 
 * @param {object} params
 
 * @return {Promise<getTreeUsingGETResponse>}
*/
export function getTreeUsingGET() {
  return API.get(`/work-team/tree`, {})
}

