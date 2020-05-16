/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-plan/copyUsingPOST
 * @summary 复制巡检计划
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function copyUsingPOST(params) {
  return API.post(`/inspect-plan/copy/${id}`, {})
}

