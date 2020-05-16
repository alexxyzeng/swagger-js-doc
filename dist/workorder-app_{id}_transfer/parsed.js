/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-app/transferUsingPUT
 * @summary 转单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.description - 问题描述
 * @param {[facilitiesItem]} params.body.facilities - 设备列表
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.isRefFacility - 是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.orgDepartmentId - 部门id
 * @param {string} params.body.phone - 联系电话
 * @param {[spaceDtosItem]} params.body.spaceDtos - 空间位置
 * @param {number} params.body.userId - 用户/客户ID
 * @param {string} params.body.userType - 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @param {string} params.body.username - 报障人名称
 * @param {number} params.body.woPriorityId - 优先级id
 * @param {number} params.body.woServiceTypeId - 服务类型id
 * @param {number} params.body.woServiceTypeRefId - 服务类型关联id, 集团版必传
 * @param {number} params.body.woSlaId - slaId
 * @param {string} params.body.woType - 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function transferUsingPUT(params) {
  return API.put(`/workorder-app/${params.id}/transfer`, { ...params.body })
}

