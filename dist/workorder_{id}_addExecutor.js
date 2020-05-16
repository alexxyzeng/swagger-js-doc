/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/addExecutorUsingPUT_1
 * @summary 增派
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function addExecutorUsingPUT_1(params) {
  return API.put(`/workorder/${id}/addExecutor`, { ...params.body })
}

