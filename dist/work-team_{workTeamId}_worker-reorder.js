/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/workersReorderUsingPUT
 * @summary 工作组执行人重排序
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function workersReorderUsingPUT(params) {
  return API.put(`/work-team/${workTeamId}/worker-reorder`, { ...params.body })
}

