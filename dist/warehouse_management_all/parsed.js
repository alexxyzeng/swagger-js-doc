/**
 * @typedef {object} dataItem
 
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {number} management 仓库管理员
 * @property {string} managementName 仓库管理员
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} warehouseId 仓库ID
 *
*/

/**
 * @typedef {object} findAllUsingGET_5Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findAllUsingGET_5
 * @summary 仓库管理员-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.warehouseId - 仓库ID
 * @return {Promise<findAllUsingGET_5Response>}
*/
export function findAllUsingGET_5(params) {
  return API.get(`/warehouse/management/all`, { params: { ...params.query })
}

