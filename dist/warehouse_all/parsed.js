/**
 * @typedef {object} dataItem
 
 * @property {string} code 
 * @property {string} createTime 
 * @property {number} creator 
 * @property {number} deleteTime 
 * @property {number} deleted 
 * @property {number} id 
 * @property {string} isEmail null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage null 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms null 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} modifier 
 * @property {string} modifyTime 
 * @property {string} name 
 * @property {number} projectId 
 * @property {string} remark 
 * @property {number} spBuildingId 
 * @property {number} spFloorId 
 * @property {number} spSpaceId 
 * @property {number} tenantId 
 * @property {number} version 
 *
*/

/**
 * @typedef {object} findAllUsingGET_4Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findAllUsingGET_4
 * @summary 库存仓库-所有
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.code - 仓库编码ID
* @param {string} params.query.name - 仓库名称
* @param {string} params.query.address - 位置
* @param {string} params.query.managements - 仓库管理员
* @param {number} params.query.managementId - 仓库管理员ID
 * @return {Promise<findAllUsingGET_4Response>}
*/
export function findAllUsingGET_4(params) {
  return API.get(`/warehouse/all`, { params: { ...params.query })
}

