/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/checkUsingPUT
 * @summary 验证
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkUsingPUT(params) {
  return API.put(`/workorder/${id}/check`, { ...params.body })
}

