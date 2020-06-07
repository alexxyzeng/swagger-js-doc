/**
 * @typedef {object} createWorkorderUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} createWorkorderUsingPUTBodyItem
 
 
 
 * @property {enum} enum 
 
 *
*/
/**
 * @tags service-center-demand
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand/createWorkorderUsingPUT
 * @summary 创建工单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {[createWorkorderUsingPUTBodyItem]} params.body - 请求体 dtos
 * @return {Promise<createWorkorderUsingPUTResponse>}
*/
export function createWorkorderUsingPUT(params) {
  return API.put(`/demand/${params.id}/workorder`, { ...params.body })
}

