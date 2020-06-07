/**
 * @typedef {object} exportUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/exportUsingGET_1
 * @summary 能耗记录列表导出
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.energyConsumptionCycle - 能耗周期
* @param {string} params.query.energyConsumptionType - 能耗类型 {水=EnergyTypeEnum-1, 电=EnergyTypeEnum-2, 天然气=EnergyTypeEnum-3}
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
 * @return {Promise<exportUsingGET_1Response>}
*/
export function exportUsingGET_1(params) {
  return API.get(`/energy/consumption/record/export`, { params: { ...params.query })
}

