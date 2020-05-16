/**
 * @tags app-index
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/app-index/appIndexUsingGET
 * @summary app首页查询
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function appIndexUsingGET(params) {
  return API.get(`/app/index`, {})
}

