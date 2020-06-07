/**
 * @typedef {object} scrambleUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-app/scrambleUsingPUT
 * @summary 抢单
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise<scrambleUsingPUTResponse>}
*/
export function scrambleUsingPUT(params) {
  return API.put(`/workorder-app/${params.workorderId}/scramble`, {})
}

