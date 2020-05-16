/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/completeUsingPUT_1
 * @summary 完成
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function completeUsingPUT_1(params) {
  return API.put(`/workorder/${params.id}/complete`, {})
}

