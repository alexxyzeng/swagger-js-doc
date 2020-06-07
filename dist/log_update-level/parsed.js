/**
 * @typedef {object} updateLevelUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {string} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-log
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-log/updateLevelUsingGET
 * @summary 日志级别修改
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.level - level
* @param {string} params.query.packageName - packageName
 * @return {Promise<updateLevelUsingGETResponse>}
*/
export function updateLevelUsingGET(params) {
  return API.get(`/log/update-level`, { params: { ...params.query })
}

