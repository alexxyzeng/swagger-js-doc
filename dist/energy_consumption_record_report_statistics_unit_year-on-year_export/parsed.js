/**
 * @typedef {object} consumptionStatisticsUnitExportUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record-report
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record-report/consumptionStatisticsUnitExportUsingGET
 * @summary 能源报表-单位能耗同比导出
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.cycleStartDate - 开始时间
* @param {string} params.query.cycleEndDate - 结束时间
* @param {string} params.query.energyConsumptionType - 能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}
* @param {[number]} params.query.projectIds - 物业点
* @param {number} params.query.tenantId - 租户id，不需要传
* @param {undefined} params.query.undefined - undefined
 * @return {Promise<consumptionStatisticsUnitExportUsingGETResponse>}
*/
export function consumptionStatisticsUnitExportUsingGET(params) {
  return API.get(`/energy/consumption/record/report/statistics/unit/year-on-year/export`, { params: { ...params.query })
}

