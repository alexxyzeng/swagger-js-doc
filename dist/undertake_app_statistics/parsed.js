/**
 * @typedef {object} dataItem
 * @property {string} type 统计类型 {查验任务=CheckTask-1, 查验验收=AcceptTask-2}
 * @property {number} count 数量
 *
*/

/**
 * @typedef {object} statisticsUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/statisticsUsingGET_1
 * @summary 承接查验待处理数量统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[string]} params.query.types - types
 * @return {Promise<statisticsUsingGET_1Response>}
*/
export function statisticsUsingGET_1(params) {
  return API.get(`/undertake/app/statistics`, { params: { ...params.query })
}

