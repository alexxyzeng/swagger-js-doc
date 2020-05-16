/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/submitUsingPUT_1
 * @summary 巡检任务-工作任务-提交
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function submitUsingPUT_1(params) {
  return API.put(`/inspect-task/job/${id}/submit`, { ...params.body })
}

