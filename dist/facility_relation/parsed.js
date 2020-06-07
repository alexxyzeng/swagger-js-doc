/**
 * @typedef {object} relationUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility/relationUsingGET
 * @summary 查询设备是否被预防性维护和巡检关联
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise<relationUsingGETResponse>}
*/
export function relationUsingGET(params) {
  return API.get(`/facility/relation`, { params: { ...params.query })
}

