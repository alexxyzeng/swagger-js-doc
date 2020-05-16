/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/matchUsingPOST
 * @summary 匹配sla
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.orgDepartmentId - 部门id
 * @param {[spaceDtosItem]} params.body.spaceDtos - 工单位置
 * @param {number} params.body.woServiceTypeId - 服务类型id
 * @param {number} params.body.woServiceTypeRefId - 关联服务类型id
 * @param {string} params.body.woType - 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function matchUsingPOST(params) {
  return API.post(`/workorder/sla/match`, { ...params.body })
}

