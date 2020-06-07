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
 * @property {string} deleted 删除状态, 离线下载接口使用 {删除=Deleted-1, 有效=Valid-0}
 * @property {string} description 描述
 * @property {string} hasUnArchiveWorkorder 是否存在未存档工单，查询服务类型同步数据使用 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} id 由程序分配的唯一ID
 * @property {number} level 层级
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 服务类型名称
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} projectId 项目ID
 * @property {string} slaStatus sla配置状态 0-未配置 1-配置 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} sort 排序
 * @property {number} woServiceTypeId 服务类型id
 *
*/

/**
 * @typedef {object} findByLastUpdatedTimestampUsingGET_3Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type-ref/findByLastUpdatedTimestampUsingGET_3
 * @summary 服务类型离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise<findByLastUpdatedTimestampUsingGET_3Response>}
*/
export function findByLastUpdatedTimestampUsingGET_3(params) {
  return API.get(`/workorder/service-type-ref/download`, { params: { ...params.query })
}

