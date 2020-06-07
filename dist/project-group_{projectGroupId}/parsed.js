/**
 * @typedef {object} data
 * @property {string} defaultGroup 是否默认项目组：1、是 0、否 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 * @property {number} projectNums 项目数
 *
*/

/**
 * @typedef {object} updateUsingPUT_46Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_46Body
 * @property {string} description 项目组描述
 * @property {string} projectGroupName 项目组名称
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_42Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project-group
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project-group/updateUsingPUT_46
 * @summary 修改项目组
 * @description 
 * @param {object} params
 * @param {number} params.projectGroupId - path
 * @param {updateUsingPUT_46Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_46Response>}
*/
export function updateUsingPUT_46(params) {
  return API.put(`/project-group/${params.projectGroupId}`, { ...params.body })
}

/**
 * @tags base-project-group
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project-group/deleteUsingDELETE_42
 * @summary 删除项目组
 * @description 
 * @param {object} params
 * @param {number} params.projectGroupId - path
 * @return {Promise<deleteUsingDELETE_42Response>}
*/
export function deleteUsingDELETE_42(params) {
  return API.delete(`/project-group/${params.projectGroupId}`, {})
}

