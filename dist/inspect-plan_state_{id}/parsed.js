/**
 * @typedef {object} updateStateUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {number} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateStateUsingPUTBody
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 *
*/
/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/updateStateUsingPUT
 * @summary 巡检计划-激活/失效
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateStateUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<updateStateUsingPUTResponse>}
*/
export function updateStateUsingPUT(params) {
  return API.put(`/inspect-plan/state/${params.id}`, { ...params.body })
}

