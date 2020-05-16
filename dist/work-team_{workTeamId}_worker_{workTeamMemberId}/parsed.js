/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/deleteWorkerUsingDELETE
 * @summary 删除工作组执行人
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
* @param {number} params.workTeamMemberId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteWorkerUsingDELETE(params) {
  return API.delete(`/work-team/${params.workTeamId}/worker/${params.workTeamMemberId}`, {})
}

