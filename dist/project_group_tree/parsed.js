/**
 * @typedef {object} childrenItem
 
 * @property {number} id id
 * @property {string} name 名称
 * @property {string} pathName 全路径
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {[childrenItem]} children
 * @property {number} id 项目组id
 * @property {string} name 项目组名称
 *
*/

/**
 * @typedef {object} findGroupTreeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/findGroupTreeUsingGET
 * @summary 项目组和项目关联树
 * @description 
 * @param {object} params
 
 * @return {Promise<findGroupTreeUsingGETResponse>}
*/
export function findGroupTreeUsingGET() {
  return API.get(`/project/group/tree`, {})
}

