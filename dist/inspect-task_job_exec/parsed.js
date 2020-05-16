/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/execUsingGET
 * @summary 巡检任务-工作任务-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.userId - 用户ID
* @param {number} params.query.taskId - 巡检任务ID
* @param {string} params.query.status - 工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function execUsingGET(params) {
  return API.get(`/inspect-task/job/exec`, { params: { ...params.query })
}

