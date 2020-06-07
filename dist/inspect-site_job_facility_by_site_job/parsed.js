/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {string} facilityCode 设备编码
 * @property {number} facilityId 设备ID
 * @property {string} facilityName 设备名称
 * @property {string} facilityStatus 设备状态 1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} facilityType 系统分类
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {number} sort 顺序
 * @property {string} status 设备模块-设备状态 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}
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
 * @typedef {object} findAllOfSiteJobUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findAllOfSiteJobUsingGET
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
 * @return {Promise<findAllOfSiteJobUsingGETResponse>}
*/
export function findAllOfSiteJobUsingGET(params) {
  return API.get(`/inspect-site/job/facility/by_site_job`, { params: { ...params.query })
}

