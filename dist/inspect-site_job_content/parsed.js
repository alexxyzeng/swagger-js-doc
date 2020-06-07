/**
 * @typedef {object} exceptions
 * @property {[string]} exceptions
 *
*/

/**
 * @typedef {object} inputRange
 * @property {number} ceiling 上限
 * @property {number} lower 下限
 *
*/

/**
 * @typedef {object} optionsItem
 
 * @property {boolean} isRight 选项是否正确
 * @property {string} option 选项值
 *
*/

/**
 * @typedef {object} options
 * @property {inputRange} inputRange 
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} contentItem
 * @property {string} type 类型：输入、选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：综合巡检、设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} model 模式：不限、夏季、冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {options} options 
 * @property {string} result 结果
 * @property {string} runStatus 运行状态：不限、在线、停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {number} templateId 模板ID
 * @property {string} templateName 模板名称
 * @property {string} unit 单位
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
 * @typedef {object} findUsingGET_30Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} deleteUsingPUT_6Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findUsingGET_30
 * @summary 巡检点位-工作任务-内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.jobId - 工作任务ID
* @param {string} params.query.jobType - 任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {number} params.query.facilityId - 设备ID
* @param {string} params.query.model - 模式 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
* @param {string} params.query.runStatus - 运行状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.content - 巡检内容
* @param {string} params.query.templateName - 巡检模板名称
* @param {string} params.query.result - 结果
 * @return {Promise<findUsingGET_30Response>}
*/
export function findUsingGET_30(params) {
  return API.get(`/inspect-site/job/content`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingPUT_6
 * @summary 批量删除巡检点位-工作任务-内容
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_6Response>}
*/
export function deleteUsingPUT_6(params) {
  return API.put(`/inspect-site/job/content`, { ...params.body })
}

