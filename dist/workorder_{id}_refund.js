/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/refundUsingPUT
 * @summary 退单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function refundUsingPUT(params) {
  return API.put(`/workorder/${id}/refund`, { ...params.body })
}

