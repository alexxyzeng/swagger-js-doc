/**
 * @typedef {object} statNumsItem
 * @property {number} type 类型（枚举值）
 * @property {number} num 数量
 *
*/

/**
 * @typedef {object} data
 * @property {[statNumsItem]} statNums
 *
*/

/**
 * @typedef {object} findUsingGET_56Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-statistics
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-statistics/findUsingGET_56
 * @summary 巡检任务数
 * @description 
 * @param {object} params
 
 * @return {Promise<findUsingGET_56Response>}
*/
export function findUsingGET_56() {
  return API.get(`/stat/inspect`, {})
}

