/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} jobId 点位任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {string} siteName 点位名称
 * @property {number} spBuildingId 大厦id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 空间id
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
 * @property {string} createTime 创建时间
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} jobId 点位任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {string} siteName 点位名称
 * @property {number} spBuildingId 大厦id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 空间id
 *
*/

/**
 * @typedef {object} findUsingGET_31Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_22Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_22Body
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} siteId 点位ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findUsingGET_31
 * @summary 巡检点位-工作任务-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.id - ID
* @param {number} params.query.siteId - 点位ID
* @param {string} params.query.job - 工作任务
* @param {string} params.query.intro - 内容描述
 * @return {Promise<findUsingGET_31Response>}
*/
export function findUsingGET_31(params) {
  return API.get(`/inspect-site/job`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/createUsingPOST_22
 * @summary 新增巡检点位-工作任务
 * @description 
 * @param {object} params
  * @param {createUsingPOST_22Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_22Response>}
*/
export function createUsingPOST_22(params) {
  return API.post(`/inspect-site/job`, { ...params.body })
}

