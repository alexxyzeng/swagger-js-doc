/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/createUsingPOST_4
 * @summary 新增需求跟进记录
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_4(params) {
  return API.post(`/demand/${demand-id}/track`, { ...params.body })
}

