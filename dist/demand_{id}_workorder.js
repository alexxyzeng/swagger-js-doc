/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand/createWorkorderUsingPUT
 * @summary 创建工单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createWorkorderUsingPUT(params) {
  return API.put(`/demand/${id}/workorder`, { ...params.body })
}

