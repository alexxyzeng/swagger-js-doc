/**
 * @tags workorder-pm
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-pm/updateStepUsingPUT
 * @summary 更新维保步骤
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.isComplete - 是否完成 0、未完成 1、已完成 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.stepDesc - 工作描述
 * @param {number} params.body.stepId - 维保步骤ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateStepUsingPUT(params) {
  return API.put(`/workorder/pm/${params.workorderId}/update-pm-step`, { ...params.body })
}

