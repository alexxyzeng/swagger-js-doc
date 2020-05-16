/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findForPlanUsingGET
 * @summary 巡检点位-工作任务-计划添加列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.siteId - 点位ID
* @param {number} params.query.spBuildingId - 大厦ID
* @param {number} params.query.spFloorId - 楼层ID
* @param {number} params.query.spSpaceId - 空间ID
* @param {string} params.query.mountSpace - 安装位置
* @param {string} params.query.site - 点位名称
* @param {string} params.query.job - 工作任务
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findForPlanUsingGET(params) {
  return API.get(`/inspect-site/plan/job`, { params: { ...params.query })
}

