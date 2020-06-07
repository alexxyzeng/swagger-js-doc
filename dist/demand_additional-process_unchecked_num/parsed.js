/**
 * @typedef {object} data
 * @property {number} num 数量
 * @property {number} type 类型（枚举值）
 *
*/

/**
 * @typedef {object} statisticUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/statisticUsingGET
 * @summary 需求追加处理记录-统计
 * @description 
 * @param {object} params
 
 * @return {Promise<statisticUsingGETResponse>}
*/
export function statisticUsingGET() {
  return API.get(`/demand/additional-process/unchecked/num`, {})
}

