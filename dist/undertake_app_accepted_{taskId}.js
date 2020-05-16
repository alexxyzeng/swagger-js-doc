/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-app/acceptedByTaskIdUsingPUT
 * @summary 对象完成验收
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function acceptedByTaskIdUsingPUT(params) {
  return API.put(`/undertake/app/accepted/${taskId}`, { ...params.body })
}

