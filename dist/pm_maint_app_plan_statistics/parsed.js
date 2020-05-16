/**
 * @tags pm-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-app/planStatisticsUsingGET
 * @summary 维保计划统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.beginDate - 日历开始时间
* @param {string} params.query.endDate - 日历结束时间
* @param {string} params.query.statisticsBeginDate - 状态统计开始时间, 没传则取日历开始时间
* @param {string} params.query.statisticsEndDate - 状态统计结束时间，没传则取日历结束时间
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function planStatisticsUsingGET(params) {
  return API.get(`/pm/maint/app/plan/statistics`, { params: { ...params.query })
}

