/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findUsingGET_37
 * @summary 巡检任务-点位-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskId - 任务ID
* @param {[string]} params.query.siteStatus - 点位状态 1-正常 2-异常 3-漏检 4-补检 5-报修 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_37(params) {
  return API.get(`/inspect-task/site`, { params: { ...params.query })
}

