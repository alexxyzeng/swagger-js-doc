/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findExecUsingGET
 * @summary 巡检待完成任务-查询列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.employeeId - 巡检人员ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.state - 巡检任务状态 {未完成=Unfinished-1, 已完成=Complete-2}
* @param {[number]} params.query.workTeamIds - 巡检人员工作组ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findExecUsingGET(params) {
  return API.get(`/inspect-task/exec`, { params: { ...params.query })
}

