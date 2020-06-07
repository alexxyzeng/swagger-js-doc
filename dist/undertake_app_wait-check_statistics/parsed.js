/**
 * @typedef {object} data
 * @property {number} isCompletedCount 已完成数量
 * @property {number} isIncompleteCount 未完成数量
 *
*/

/**
 * @typedef {object} statisticsByWaitCheckUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/statisticsByWaitCheckUsingGET
 * @summary 查验任务-数量统计
 * @description 
 * @param {object} params
 
 * @return {Promise<statisticsByWaitCheckUsingGETResponse>}
*/
export function statisticsByWaitCheckUsingGET() {
  return API.get(`/undertake/app/wait-check/statistics`, {})
}

