/**
 * @typedef {object} dataItem
 
 * @property {number} chainGrowth 环比增长
 * @property {number} lastMonthDosage 上月单位用量
 * @property {string} projectName 物业点
 * @property {number} thisMonthDosage 本月单位用量
 *
*/

/**
 * @typedef {object} consumptionStatisticsMonthUnitUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record-report
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record-report/consumptionStatisticsMonthUnitUsingGET
 * @summary 能源报表-单位能耗环比
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.cycleDate - 统计周期
* @param {string} params.query.energyConsumptionType - 能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}
* @param {[number]} params.query.projectIds - 物业点
* @param {number} params.query.tenantId - 租户id，不需要传
* @param {undefined} params.query.undefined - undefined
 * @return {Promise<consumptionStatisticsMonthUnitUsingGETResponse>}
*/
export function consumptionStatisticsMonthUnitUsingGET(params) {
  return API.get(`/energy/consumption/record/report/statistics/month/unit/chain`, { params: { ...params.query })
}

