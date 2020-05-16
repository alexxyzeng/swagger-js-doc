/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/searchUsingGET_3
 * @summary 项目列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET_3(params) {
  return API.get(`/project`, { params: { ...params.query })
}

/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/createUsingPOST_34
 * @summary 新增项目
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.description - 项目组描述
 * @param {string} params.body.projectGroupName - 项目组名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_34(params) {
  return API.post(`/project`, { ...params.body })
}

