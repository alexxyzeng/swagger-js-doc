/**
 * @tags workorder-pm
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-pm/updateStepUsingPUT
 * @summary 更新维保步骤
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateStepUsingPUT(params) {
  return API.put(`/workorder/pm/${workorderId}/update-pm-step`, { ...params.body })
}

