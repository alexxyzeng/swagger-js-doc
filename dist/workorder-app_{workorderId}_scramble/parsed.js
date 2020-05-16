/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-app/scrambleUsingPUT
 * @summary 抢单
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function scrambleUsingPUT(params) {
  return API.put(`/workorder-app/${params.workorderId}/scramble`, {})
}

