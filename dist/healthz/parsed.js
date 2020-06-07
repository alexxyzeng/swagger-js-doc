/**
 * @typedef {object} data
 * @property {string} gitCommitId 
 * @property {string} gitCommitTime 
 * @property {string} ip 
 * @property {number} port 
 *
*/

/**
 * @typedef {object} pingUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-health
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-health/pingUsingGET
 * @summary 应用健康检测
 * @description 
 * @param {object} params
 
 * @return {Promise<pingUsingGETResponse>}
*/
export function pingUsingGET() {
  return API.get(`/healthz`, {})
}

