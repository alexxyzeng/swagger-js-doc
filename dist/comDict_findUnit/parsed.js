/**
 * @typedef {object} dataItem
 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {string} dictDesc 
 * @property {string} dictText 
 * @property {string} dictType 
 * @property {number} dictValue 
 * @property {number} fixed 
 * @property {number} id 
 * @property {number} isDefault 
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {number} parentId 
 * @property {number} projectId 
 * @property {number} sort 
 * @property {number} tenantId 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} findUnitUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-dict
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-dict/findUnitUsingGET
 * @summary 公共字典查询
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.unitName - unitName
 * @return {Promise<findUnitUsingGETResponse>}
*/
export function findUnitUsingGET(params) {
  return API.get(`/comDict/findUnit`, { params: { ...params.query })
}

