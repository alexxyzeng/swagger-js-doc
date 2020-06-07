/**
 * @typedef {object} relationUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/relationUsingGET_1
 * @summary 查询设施分类是否被预防性维护和巡检关联
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise<relationUsingGET_1Response>}
*/
export function relationUsingGET_1(params) {
  return API.get(`/facilityType/relation`, { params: { ...params.query })
}

