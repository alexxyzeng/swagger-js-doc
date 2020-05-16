/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/affirmUsingPUT
 * @summary 需求验收
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.content - 内容
 * @param {string} params.body.isPass - 是否通过 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function affirmUsingPUT(params) {
  return API.put(`/demand/${params.id}/affirm`, { ...params.body })
}

