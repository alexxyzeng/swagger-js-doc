/**
 * @typedef {object} dataItem
 
 * @property {boolean} disabled 是否有其他物业点/公司关联：是否可用
 * @property {number} id 项目ID
 * @property {string} name 项目名称
 *
*/

/**
 * @typedef {object} findByPropertyUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/findByPropertyUsingGET
 * @summary 物业点关联项目
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - 供应商id/物业点id，更新时时传入
* @param {string} params.query.projectName - 项目名称
 * @return {Promise<findByPropertyUsingGETResponse>}
*/
export function findByPropertyUsingGET(params) {
  return API.get(`/project/list/property`, { params: { ...params.query })
}

