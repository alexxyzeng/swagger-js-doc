/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/terminationUsingPUT
 * @summary 终止
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function terminationUsingPUT(params) {
  return API.put(`/workorder/${id}/termination`, { ...params.body })
}

