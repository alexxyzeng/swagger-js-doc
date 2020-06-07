/**
 * @typedef {object} statisticsUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/index/statisticsUsingPOST
 * @summary 更新统计数据
 * @description 
 * @param {object} params
 * @param {string} params.startDate - path
 * @return {Promise<statisticsUsingPOSTResponse>}
*/
export function statisticsUsingPOST(params) {
  return API.post(`/index/statistics/${params.startDate}`, {})
}

