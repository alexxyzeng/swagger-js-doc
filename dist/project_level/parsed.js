/**
 * @typedef {object} dataItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} searchByLevelUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/searchByLevelUsingGET
 * @summary 按层级查询项目信息
 * @description 
 * @param {object} params
 * @param {number} params.parentId - path
 * @return {Promise<searchByLevelUsingGETResponse>}
*/
export function searchByLevelUsingGET(params) {
  return API.get(`/project/level`, {})
}

