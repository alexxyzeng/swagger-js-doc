/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/submitUsingPUT
 * @summary 提交巡检任务
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function submitUsingPUT(params) {
  return API.put(`/inspect-task/submit/${id}`, { ...params.body })
}

