/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/syncUsingGET
 * @summary fz巡检点位同步
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function syncUsingGET(params) {
  return API.get(`/inspect-site/sync`, {})
}

