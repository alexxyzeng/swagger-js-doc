/**
 * @typedef {object} removeByIdUsingDELETE_1Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-space
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-space/removeByIdUsingDELETE_1
 * @summary 删除工单空间位置
 * @description 
 * @param {object} params
 * @param {number} params.workorderSpaceId - path
 * @return {Promise<removeByIdUsingDELETE_1Response>}
*/
export function removeByIdUsingDELETE_1(params) {
  return API.delete(`/workorder-space/${params.workorderSpaceId}`, {})
}

