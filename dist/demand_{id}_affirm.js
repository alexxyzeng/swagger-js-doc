/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand/affirmUsingPUT
 * @summary 需求验收
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function affirmUsingPUT(params) {
  return API.put(`/demand/${id}/affirm`, { ...params.body })
}

