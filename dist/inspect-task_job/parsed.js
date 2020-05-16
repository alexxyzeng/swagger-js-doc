/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findUsingGET_34
 * @summary 巡检任务-工作任务-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskId - 巡检任务ID
* @param {string} params.query.site - 点位
* @param {string} params.query.job - 工作任务
* @param {string} params.query.status - 工作任务状态 {未完成=Unfinished-1, 已完成=Complete-2}
* @param {[string]} params.query.statuses - 工作任务状态 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_34(params) {
  return API.get(`/inspect-task/job`, { params: { ...params.query })
}

