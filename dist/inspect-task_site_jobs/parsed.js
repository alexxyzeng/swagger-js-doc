/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findJobsUsingGET
 * @summary 巡检任务-点位-扫码任务列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.userId - 用户ID
* @param {string} params.query.qrcodeDynamicCode - 点位码Code
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findJobsUsingGET(params) {
  return API.get(`/inspect-task/site/jobs`, { params: { ...params.query })
}

