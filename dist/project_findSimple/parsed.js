/**
 * @typedef {object} dataItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} finaAllUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/finaAllUsingGET
 * @summary 获取项目（工作流物业点）
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.projectName - 项目名称
* @param {string} params.query.projectGroupName - 项目组名称
* @param {string} params.query.projectStatus - 项目状态: 1、未开始 2、服务中 3、预警 4、过期 {未开始=NotStart-1, 服务中=Serving-2, 预警中=Warning-3, 已过期=Expired-4}
* @param {string} params.query.createTimeStartDate - 创建开始时间
* @param {string} params.query.createTimeEndDate - 创建结束时间
* @param {string} params.query.serviceStartDate - 服务开始时间
* @param {string} params.query.serviceEndDate - 服务结束时间
* @param {string} params.query.serviceEndDateStartDate - 服务结束时间查询开始时间
* @param {string} params.query.serviceEndDateEndDate - 服务结束时间查询结束时间
* @param {number} params.query.maxUser - 授权用户数
* @param {number} params.query.usedUser - 使用用户数
* @param {string} params.query.code - 项目编码
* @param {string} params.query.identifier - 项目标识号
* @param {string} params.query.bizType - 项目业态
* @param {number} params.query.geoId - 地理位置ID，可以是省、市、区
* @param {string} params.query.area - 项目(建筑)面积
* @param {string} params.query.usedArea - 项目(使用)面积
* @param {[number]} params.query.exIdx - 需排除项目ID
 * @return {Promise<finaAllUsingGETResponse>}
*/
export function finaAllUsingGET(params) {
  return API.get(`/project/findSimple`, { params: { ...params.query })
}

