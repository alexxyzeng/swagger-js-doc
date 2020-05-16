/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findAllOfSiteJobUsingGET
 * @summary 巡检点位-工作任务-设备-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - projectId
* @param {number} params.query.jobId - 点位工作任务ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllOfSiteJobUsingGET(params) {
  return API.get(`/inspect-site/job/facility/by_site_job`, { params: { ...params.query })
}

