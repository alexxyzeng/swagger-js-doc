/**
 * @typedef {object} demandTrend
 
 *
*/

/**
 * @typedef {object} workorderTrend
 
 *
*/

/**
 * @typedef {object} data
 * @property {number} areaTotal 总面积, 平方米
 * @property {number} demandCompletedTotal 需求完成数
 * @property {number} demandTotal 需求总数
 * @property {demandTrend} demandTrend 
 * @property {number} facilityTotal 设备总数
 * @property {number} inspectPlanTotal 巡检计划总数
 * @property {number} maintTotal 维保计划总数
 * @property {number} projectTotal 项目总数
 * @property {number} workorderCompletedTotal 工单完成数
 * @property {number} workorderTotal 工单总数
 * @property {workorderTrend} workorderTrend 
 *
*/

/**
 * @typedef {object} indexStatisticsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/index/indexStatisticsUsingGET
 * @summary 首页统计接口
 * @description 
 * @param {object} params
 
 * @return {Promise<indexStatisticsUsingGETResponse>}
*/
export function indexStatisticsUsingGET() {
  return API.get(`/index/statistics`, {})
}

