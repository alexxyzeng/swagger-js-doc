/**
 * @typedef {object} syncUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/syncUsingGET
 * @summary fz巡检点位同步
 * @description 
 * @param {object} params
 
 * @return {Promise<syncUsingGETResponse>}
*/
export function syncUsingGET() {
  return API.get(`/inspect-site/sync`, {})
}

