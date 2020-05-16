/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/updateStateUsingPUT
 * @summary 巡检计划-激活/失效
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateStateUsingPUT(params) {
  return API.put(`/inspect-plan/state/${id}`, { ...params.body })
}

