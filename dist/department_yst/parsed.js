/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-department/ystUsingGET
 * @summary 一事通同步
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function ystUsingGET(params) {
  return API.get(`/department/yst`, {})
}

