/**
 * @typedef {object} data
 * @property {string} code 岗位编码
 * @property {string} description 岗位描述
 * @property {number} id 岗位id
 * @property {number} level 岗位层级
 * @property {string} name 岗位名称
 * @property {number} parentId 上级岗位id
 * @property {number} sort 岗位排序
 *
*/

/**
 * @typedef {object} findByIdUsingGET_38Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_40Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/findByIdUsingGET_38
 * @summary 查找指定ID岗位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_38Response>}
*/
export function findByIdUsingGET_38(params) {
  return API.get(`/position/${params.id}`, {})
}

/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/deleteUsingDELETE_40
 * @summary 删除岗位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_40Response>}
*/
export function deleteUsingDELETE_40(params) {
  return API.delete(`/position/${params.id}`, {})
}

