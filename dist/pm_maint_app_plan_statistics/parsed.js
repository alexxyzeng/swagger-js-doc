/**
 * @typedef {object} calendarStatisticsItem
 
 * @property {number} count 数量
 * @property {string} date 唯一id
 *
*/

/**
 * @typedef {object} statusStatisticsItem
 
 * @property {number} count 数量
 * @property {number} ratio 占比
 * @property {string} status 状态 {未开始=NotBegin-1, 处理中=InProgress-2, 已完成=JobDone-3, 已过期=Expired-4, 已逾期=Overdue-5}
 *
*/

/**
 * @typedef {object} data
 * @property {[calendarStatisticsItem]} calendarStatistics
 * @property {[statusStatisticsItem]} statusStatistics
 *
*/

/**
 * @typedef {object} planStatisticsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm-app/planStatisticsUsingGET
 * @summary 维保计划统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.beginDate - 日历开始时间
* @param {string} params.query.endDate - 日历结束时间
* @param {string} params.query.statisticsBeginDate - 状态统计开始时间, 没传则取日历开始时间
* @param {string} params.query.statisticsEndDate - 状态统计结束时间，没传则取日历结束时间
 * @return {Promise<planStatisticsUsingGETResponse>}
*/
export function planStatisticsUsingGET(params) {
  return API.get(`/pm/maint/app/plan/statistics`, { params: { ...params.query })
}

