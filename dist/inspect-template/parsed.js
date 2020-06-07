/**
 * @typedef {object} contentItem
 * @property {string} type 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 模板名称
 * @property {number} projectId 项目id
 * @property {boolean} selected 是否已选择
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
 * @property {string} description 描述
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 模板名称
 * @property {number} projectId 项目id
 * @property {boolean} selected 是否已选择
 * @property {string} type 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 *
*/

/**
 * @typedef {object} findUsingGET_43Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_28Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_28Body
 * @property {string} description 描述
 * @property {string} name 模板名称
 * @property {string} type 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 *
*/

/**
 * @typedef {object} deleteUsingPUT_10Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/findUsingGET_43
 * @summary 巡检模板-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 模板名称
* @param {string} params.query.type - 模板类型：1-清洁 2-安保 3-设备 4-机房 5-抄表 6-绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
* @param {string} params.query.description - 描述
 * @return {Promise<findUsingGET_43Response>}
*/
export function findUsingGET_43(params) {
  return API.get(`/inspect-template`, { params: { ...params.query })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/createUsingPOST_28
 * @summary 新增巡检模板
 * @description 
 * @param {object} params
  * @param {createUsingPOST_28Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_28Response>}
*/
export function createUsingPOST_28(params) {
  return API.post(`/inspect-template`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/deleteUsingPUT_10
 * @summary 批量删除巡检模板
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_10Response>}
*/
export function deleteUsingPUT_10(params) {
  return API.put(`/inspect-template`, { ...params.body })
}

