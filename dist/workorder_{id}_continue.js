/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/continuedUsingPUT
 * @summary 继续
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function continuedUsingPUT(params) {
  return API.put(`/workorder/${id}/continue`, { ...params.body })
}

