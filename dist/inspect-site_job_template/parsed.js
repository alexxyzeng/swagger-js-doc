/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {number} facilityId 设备ID
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} templateId 模块ID
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
 * @typedef {object} findUsingGET_32Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_24Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_24Body
 * @property {[number]} facilityIds
 * @property {number} id 唯一id
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {number} projectId 项目id
 * @property {[number]} templateIds
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findUsingGET_32
 * @summary 巡检点位-工作任务-模板-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.jobId - 点位工作任务ID
* @param {[number]} params.query.facilityIds - 点位工作任务设备ID
* @param {string} params.query.jobType - 点位工作类型1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {string} params.query.name - 模板名称
* @param {string} params.query.type - 模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
* @param {string} params.query.description - 模版描述
 * @return {Promise<findUsingGET_32Response>}
*/
export function findUsingGET_32(params) {
  return API.get(`/inspect-site/job/template`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/createUsingPOST_24
 * @summary 新增巡检点位-工作任务-模板
 * @description 
 * @param {object} params
  * @param {createUsingPOST_24Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_24Response>}
*/
export function createUsingPOST_24(params) {
  return API.post(`/inspect-site/job/template`, { ...params.body })
}

