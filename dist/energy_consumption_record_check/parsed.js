/**
 * @typedef {object} checkUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/checkUsingGET
 * @summary 能耗记录表-校验
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id，更新的时候校验必须要传入当前的id
* @param {string} params.query.energyConsumptionCycle - 能耗周期
* @param {number} params.query.energyConsumptionType - 能耗类型
 * @return {Promise<checkUsingGETResponse>}
*/
export function checkUsingGET(params) {
  return API.get(`/energy/consumption/record/check`, { params: { ...params.query })
}

