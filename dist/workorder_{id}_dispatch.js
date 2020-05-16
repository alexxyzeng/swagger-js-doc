/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/dispatchUsingPUT
 * @summary 排程派工
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function dispatchUsingPUT(params) {
  return API.put(`/workorder/${id}/dispatch`, { ...params.body })
}

