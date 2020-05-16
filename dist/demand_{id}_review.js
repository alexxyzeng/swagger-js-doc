/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand/reviewUsingPUT
 * @summary 需求审核
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function reviewUsingPUT(params) {
  return API.put(`/demand/${id}/review`, { ...params.body })
}

