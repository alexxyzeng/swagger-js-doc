/**
 * @typedef {object} contentItem
 
 * @property {string} autoArchive 是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} orgDepartmentId 部门id
 * @property {string} orgDepartmentName 部门名称
 * @property {string} priorityNames 优先级名称
 * @property {number} projectId 项目ID
 * @property {string} serviceTypePathName 服务类型全称
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间ID
 * @property {string} spSpaceName 房间名称
 * @property {string} spaceWholeName 位置全称
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 关联服务类型id
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
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
 * @typedef {object} findUsingGET_54Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-sla
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-sla/findUsingGET_54
 * @summary 查询sla列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.serviceTypePathName - 服务类型全称
* @param {string} params.query.spaceWholeName - 位置名称
* @param {string} params.query.orgDepartmentName - 部门名称
* @param {[string]} params.query.woType - 工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
* @param {string} params.query.priorityNames - 优先级名称
 * @return {Promise<findUsingGET_54Response>}
*/
export function findUsingGET_54(params) {
  return API.get(`/workorder/sla/search`, { params: { ...params.query })
}

