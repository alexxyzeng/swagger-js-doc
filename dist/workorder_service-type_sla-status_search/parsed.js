/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} childrenItem
 
 
 
 * @property {enum} enum 
 
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {[childrenItem]} children
 * @property {string} code 编码
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {number} level 层级
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 服务类型名称
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} projectId 项目ID
 * @property {string} slaStatus sla配置状态 0-未配置 1-配置 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} sort 排序
 *
*/

/**
 * @typedef {object} findSlaStatusUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/findSlaStatusUsingGET
 * @summary 查询服务类型及是否配置sla
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
 * @return {Promise<findSlaStatusUsingGETResponse>}
*/
export function findSlaStatusUsingGET(params) {
  return API.get(`/workorder/service-type/sla-status/search`, { params: { ...params.query })
}

