/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_18Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_26Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_26Body
 * @property {number} id 唯一id
 * @property {number} jobId 点位工作任务ID
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} siteId 点位ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_24Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/findByIdUsingGET_18
 * @summary 巡检计划-点位-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_18Response>}
*/
export function findByIdUsingGET_18(params) {
  return API.get(`/inspect-plan/site/${params.id}`, {})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/updateUsingPUT_26
 * @summary 修改巡检计划-点位-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_26Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_26Response>}
*/
export function updateUsingPUT_26(params) {
  return API.put(`/inspect-plan/site/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingDELETE_24
 * @summary 删除巡检计划-点位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_24Response>}
*/
export function deleteUsingDELETE_24(params) {
  return API.delete(`/inspect-plan/site/${params.id}`, {})
}

