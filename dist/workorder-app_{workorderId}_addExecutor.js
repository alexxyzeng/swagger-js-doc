/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-app/addExecutorUsingPUT
 * @summary 增派
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function addExecutorUsingPUT(params) {
  return API.put(`/workorder-app/${workorderId}/addExecutor`, { ...params.body })
}

