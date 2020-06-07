/**
 * @typedef {object} contentItem
 
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} job 工作任务
 * @property {string} mountSpace 安装位置
 * @property {string} siteName 点位名称
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

/**
 * @typedef {object} data
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findForPlanUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findForPlanUsingGET
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
 * @return {Promise<findForPlanUsingGETResponse>}
*/
export function findForPlanUsingGET(params) {
  return API.get(`/inspect-site/plan/job`, { params: { ...params.query })
}

