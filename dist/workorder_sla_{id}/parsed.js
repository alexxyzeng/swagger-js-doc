/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/detailUsingGET_2
 * @summary 查询sla详情信息-byId
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_2(params) {
  return API.get(`/workorder/sla/${params.id}`, {})
}

/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/updateUsingPUT_48
 * @summary 更新sla
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.autoArchive - 是否自动存档 0-否 1-是 默认值为0 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.orgDepartmentId - 部门id
 * @param {[priorityDtosItem]} params.body.priorityDtos - 优先级处理事项
 * @param {number} params.body.spBuildingId - 大楼ID
 * @param {number} params.body.spFloorId - 楼层ID
 * @param {number} params.body.spSpaceId - 房间ID
 * @param {number} params.body.woServiceTypeId - 服务类型id
 * @param {number} params.body.woServiceTypeRefId - 关联服务类型id 集团版必传
 * @param {string} params.body.woType - 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_48(params) {
  return API.put(`/workorder/sla/${params.id}`, { ...params.body })
}

/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/deleteUsingDELETE_45
 * @summary 删除sla
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_45(params) {
  return API.delete(`/workorder/sla/${params.id}`, {})
}

