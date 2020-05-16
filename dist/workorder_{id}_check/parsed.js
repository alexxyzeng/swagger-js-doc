/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/checkUsingPUT
 * @summary 验证
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.desc - 不通过原因
 * @param {string} params.body.isPass - 验证结果 0-不通过 1-通过 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.woWorkorderId - 工单id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkUsingPUT(params) {
  return API.put(`/workorder/${params.id}/check`, { ...params.body })
}

