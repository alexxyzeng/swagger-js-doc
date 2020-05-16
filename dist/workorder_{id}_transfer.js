/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/transferUsingPUT_1
 * @summary 转单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function transferUsingPUT_1(params) {
  return API.put(`/workorder/${id}/transfer`, { ...params.body })
}

