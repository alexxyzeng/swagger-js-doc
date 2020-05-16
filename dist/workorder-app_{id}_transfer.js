/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-app/transferUsingPUT
 * @summary 转单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function transferUsingPUT(params) {
  return API.put(`/workorder-app/${id}/transfer`, { ...params.body })
}

