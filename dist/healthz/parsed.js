/**
 * @tags base-health
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-health/pingUsingGET
 * @summary 应用健康检测
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function pingUsingGET(params) {
  return API.get(`/healthz`, {})
}

