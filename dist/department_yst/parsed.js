/**
 * @typedef {object} ystUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/ystUsingGET
 * @summary 一事通同步
 * @description 
 * @param {object} params
 
 * @return {Promise<ystUsingGETResponse>}
*/
export function ystUsingGET() {
  return API.get(`/department/yst`, {})
}

