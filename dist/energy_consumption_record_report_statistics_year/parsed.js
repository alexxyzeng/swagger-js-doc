/**
 * @typedef {object} detailItem
 
 *
*/

/**
 * @typedef {object} reportColumnRspDtoItem
 
 * @property {number} currentYearCost 今年费用
 * @property {number} currentYearDosage 今年用量
 * @property {string} cycleDate 能耗周期
 * @property {number} lastYearCost 去年费用
 * @property {number} lastYearDosage 去年用量
 * @property {number} yearOnYearGrowthCost 费用:同比增长
 * @property {number} yearOnYearGrowthDosage 用量:同比增长
 *
*/

/**
 * @typedef {object} data
 * @property {[detailItem]} detail
 * @property {[reportColumnRspDtoItem]} reportColumnRspDto
 *
*/

/**
 * @typedef {object} consumptionStatisticsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record-report
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record-report/consumptionStatisticsUsingGET
 * @summary 能源报表-年度统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.year - 统计年份
* @param {string} params.query.energyConsumptionType - 能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}
* @param {[number]} params.query.projectIds - 物业点
* @param {number} params.query.tenantId - 租户id，不需要传
* @param {string} params.query.type - 统计方式 {费用=EnergyStasticsTypeEnum-1, 用量=EnergyStasticsTypeEnum-2}
* @param {undefined} params.query.undefined - undefined
 * @return {Promise<consumptionStatisticsUsingGETResponse>}
*/
export function consumptionStatisticsUsingGET(params) {
  return API.get(`/energy/consumption/record/report/statistics/year`, { params: { ...params.query })
}

