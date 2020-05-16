/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/patchUsingPUT
 * @summary 巡检任务-工作任务-补检(web)
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function patchUsingPUT(params) {
  return API.put(`/inspect-task/job/${id}/patch`, { ...params.body })
}

