/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} isMiss 是否漏检 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isPatch 是否补检 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSubmit 是否提交 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 名称
 * @property {number} planId 巡检计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 * @property {string} status 状态：1-未检 2-已检 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {number} taskId 任务ID
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
 * @typedef {object} findUsingGET_40Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findUsingGET_40
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
 * @return {Promise<findUsingGET_40Response>}
*/
export function findUsingGET_40(params) {
  return API.get(`/inspect-task/site`, { params: { ...params.query })
}

