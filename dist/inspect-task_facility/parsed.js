/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findUsingGET_33
 * @summary 巡检任务-设备-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskJobId - 巡检任务-工作任务ID
* @param {string} params.query.jobType - 巡检任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_33(params) {
  return API.get(`/inspect-task/facility`, { params: { ...params.query })
}

