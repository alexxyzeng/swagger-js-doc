/**
 * @typedef {object} deleteByIdUsingDELETEResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-priority
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-priority/deleteByIdUsingDELETE
 * @summary 优先级删除
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteByIdUsingDELETEResponse>}
*/
export function deleteByIdUsingDELETE(params) {
  return API.delete(`/workorder/priority/${params.id}`, {})
}

