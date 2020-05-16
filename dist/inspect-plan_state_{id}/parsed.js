/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/updateStateUsingPUT
 * @summary 巡检计划-激活/失效
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.status - 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateStateUsingPUT(params) {
  return API.put(`/inspect-plan/state/${params.id}`, { ...params.body })
}

