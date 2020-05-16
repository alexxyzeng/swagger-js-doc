/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/terminationUsingPUT
 * @summary 终止
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.desc - 终止原因
 * @param {string} params.body.isTransfer - 是否转单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function terminationUsingPUT(params) {
  return API.put(`/workorder/${params.id}/termination`, { ...params.body })
}

