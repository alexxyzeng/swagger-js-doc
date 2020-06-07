/**
 * @typedef {object} dataItem
 
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
 * @typedef {object} findFacilitiesByTypeIdsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm-app/findFacilitiesByTypeIdsUsingGET
 * @summary 维保对象-设备
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.facilityTypeIds - facilityTypeIds
 * @return {Promise<findFacilitiesByTypeIdsUsingGETResponse>}
*/
export function findFacilitiesByTypeIdsUsingGET(params) {
  return API.get(`/pm/maint/app/plan/facilities`, { params: { ...params.query })
}

