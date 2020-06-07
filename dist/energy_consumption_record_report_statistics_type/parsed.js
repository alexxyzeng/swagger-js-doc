/**
 * @typedef {object} dataItem
 
 * @property {number} code code
 * @property {string} describe 描述
 *
*/

/**
 * @typedef {object} consumptionStatisticsTypeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record-report
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record-report/consumptionStatisticsTypeUsingGET
 * @summary 能源报表-统计方式
 * @description 
 * @param {object} params
 
 * @return {Promise<consumptionStatisticsTypeUsingGETResponse>}
*/
export function consumptionStatisticsTypeUsingGET() {
  return API.get(`/energy/consumption/record/report/statistics/type`, {})
}

