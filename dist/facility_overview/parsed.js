/**
 * @tags facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility/overviewUsingGET
 * @summary 设备资产概览
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function overviewUsingGET(params) {
  return API.get(`/facility/overview`, {})
}

