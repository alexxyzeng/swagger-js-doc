/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/obsoleteUsingPUT
 * @summary 需求作废
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 内容
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function obsoleteUsingPUT(params) {
  return API.put(`/demand/${params.id}/obsolete`, { ...params.body })
}

