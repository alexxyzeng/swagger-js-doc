/**
 * @typedef {object} data
 
 *
*/

/**
 * @typedef {object} findTreeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/findTreeUsingGET
 * @summary 查询项目信息, 返回树
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.projectName - 项目名称
* @param {number} params.query.excludeProjectId - 不返回的项目id
 * @return {Promise<findTreeUsingGETResponse>}
*/
export function findTreeUsingGET(params) {
  return API.get(`/project/tree/simple`, { params: { ...params.query })
}

