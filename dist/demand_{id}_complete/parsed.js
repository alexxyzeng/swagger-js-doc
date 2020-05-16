/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/completeUsingPUT
 * @summary 需求完成
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function completeUsingPUT(params) {
  return API.put(`/demand/${params.id}/complete`, {})
}

