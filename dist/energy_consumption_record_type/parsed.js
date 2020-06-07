/**
 * @typedef {object} dataItem
 
 * @property {number} code code
 * @property {string} describe 描述
 * @property {string} typeCh 单位中文
 * @property {string} typeEn 单位英文
 *
*/

/**
 * @typedef {object} getTypeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/getTypeUsingGET
 * @summary 能耗类型-列表
 * @description 
 * @param {object} params
 
 * @return {Promise<getTypeUsingGETResponse>}
*/
export function getTypeUsingGET() {
  return API.get(`/energy/consumption/record/type`, {})
}

