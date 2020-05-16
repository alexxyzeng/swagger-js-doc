/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-app/checkedByTaskIdUsingPUT
 * @summary 对象完成查验
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkedByTaskIdUsingPUT(params) {
  return API.put(`/undertake/app/checked/${params.taskId}`, {})
}

