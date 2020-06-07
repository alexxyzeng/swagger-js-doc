/**
 * @typedef {object} prioritiesItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} priorities
 * @property {[prioritiesItem]} priorities
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {string} autoArchive 是否自动存档 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} deleteTime 删除时间
 * @property {string} deleted 删除状态 {删除=Deleted-1, 有效=Valid-0}
 * @property {number} id 由程序分配的唯一ID
 * @property {number} orgDepartmentId 部门id
 * @property {priorities} priorities 
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 房间ID
 * @property {number} tenantId 租户ID
 * @property {number} version 版本号
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 关联服务类型id
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/

/**
 * @typedef {object} findByLastUpdatedTimestampUsingGET_4Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-sla
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-sla/findByLastUpdatedTimestampUsingGET_4
 * @summary 流程设置离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise<findByLastUpdatedTimestampUsingGET_4Response>}
*/
export function findByLastUpdatedTimestampUsingGET_4(params) {
  return API.get(`/workorder/sla/download`, { params: { ...params.query })
}

