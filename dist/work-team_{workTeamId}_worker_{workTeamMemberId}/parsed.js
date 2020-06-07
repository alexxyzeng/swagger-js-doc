/**
 * @typedef {object} deleteWorkerUsingDELETEResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/deleteWorkerUsingDELETE
 * @summary 删除工作组执行人
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
* @param {number} params.workTeamMemberId - path
 * @return {Promise<deleteWorkerUsingDELETEResponse>}
*/
export function deleteWorkerUsingDELETE(params) {
  return API.delete(`/work-team/${params.workTeamId}/worker/${params.workTeamMemberId}`, {})
}

