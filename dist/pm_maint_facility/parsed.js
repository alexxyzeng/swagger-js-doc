/**
 * @typedef {object} contentItem
 
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类展示
 * @property {number} facilityTypeId 系统分类
 * @property {number} id 设备台帐ID
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大厦
 * @property {number} spFloorId 楼层
 * @property {number} spSpaceId 房间
 * @property {number} tenantId 企业ID
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
 * @typedef {object} findFacilityUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm/findFacilityUsingPUT
 * @summary 维保设备列表筛选
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.facilityIds - 设备ID
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.facilityType - 系统分类
* @param {string} params.query.mountSpace - 安装位置
* @param {number} params.query.pageNumber - 当前页
* @param {number} params.query.pageSize - 每页条数
* @param {[string]} params.query.pageSort - 排序
 * @return {Promise<findFacilityUsingPUTResponse>}
*/
export function findFacilityUsingPUT(params) {
  return API.put(`/pm/maint/facility`, { params: { ...params.query })
}

