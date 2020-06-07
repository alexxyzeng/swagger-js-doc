/**
 * @typedef {object} contentItem
 
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类展示
 * @property {number} facilityTypeId 系统分类
 * @property {number} id 设备ID
 * @property {string} isMaintained 是否维保 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} mountSpace 安装位置
 * @property {number} spBuildingId 大厦
 * @property {number} spFloorId 楼层
 * @property {number} spSpaceId 房间
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
 * @typedef {object} findFacilityOfFacilityTypeByIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm/findFacilityOfFacilityTypeByIdUsingGET
 * @summary 查询维保设备分类关联设备
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.maintId - 维保设置ID
* @param {[number]} params.query.facilityTypeIds - 设备分类ID
* @param {string} params.query.facilityCode - 设备编码
* @param {string} params.query.facilityName - 设备名称
* @param {string} params.query.facilityType - 系统分类
* @param {string} params.query.mountSpace - 安装位置
* @param {string} params.query.isMaintained - 是否维保 是否枚举{否=No-0, 是=Yes-1}
 * @return {Promise<findFacilityOfFacilityTypeByIdUsingGETResponse>}
*/
export function findFacilityOfFacilityTypeByIdUsingGET(params) {
  return API.get(`/pm/maint/facility-type/facility`, { params: { ...params.query })
}

