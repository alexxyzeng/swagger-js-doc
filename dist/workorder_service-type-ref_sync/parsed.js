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
 * @typedef {object} syncServiceTypeUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} syncServiceTypeUsingPUTBody
 * @property {[number]} typeIds
 *
*/
/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type-ref/syncServiceTypeUsingPUT
 * @summary 同步服务类型
 * @description 
 * @param {object} params
  * @param {syncServiceTypeUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<syncServiceTypeUsingPUTResponse>}
*/
export function syncServiceTypeUsingPUT(params) {
  return API.put(`/workorder/service-type-ref/sync`, { ...params.body })
}

