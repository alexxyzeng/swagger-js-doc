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
 * @typedef {object} findByIdUsingGET_31Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_39Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_39Body
 * @property {string} description 描述
 * @property {string} name 模板名称
 * @property {string} type 类型：清洁、安保、设备、机房、抄表、绿化 {清洁=Clean-1, 安保=Security-2, 设备=Facility-3, 机房=MachineRoom-4, 抄表=MeterReading-5, 绿化=Afforest-6}
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_31Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/findByIdUsingGET_31
 * @summary 巡检模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_31Response>}
*/
export function findByIdUsingGET_31(params) {
  return API.get(`/inspect-template/${params.id}`, {})
}

/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/updateUsingPUT_39
 * @summary 修改巡检模板-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_39Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_39Response>}
*/
export function updateUsingPUT_39(params) {
  return API.put(`/inspect-template/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/deleteUsingDELETE_31
 * @summary 删除巡检模板
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_31Response>}
*/
export function deleteUsingDELETE_31(params) {
  return API.delete(`/inspect-template/${params.id}`, {})
}

