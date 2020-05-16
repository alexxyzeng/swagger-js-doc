/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/workersReorderUsingPUT
 * @summary 工作组执行人重排序
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function workersReorderUsingPUT(params) {
  return API.put(`/work-team/${params.workTeamId}/worker-reorder`, { ...params.body })
}

