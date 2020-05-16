/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/tracingUsingGET
 * @summary 工单追踪
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {[string]} params.query.woTypes - 工单类型 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
* @param {number} params.query.projectId - 项目id
* @param {string} params.query.code - 工单编码
* @param {string} params.query.username - 报障人名称
* @param {string} params.query.phone - 联系电话
* @param {number} params.query.orgDepartmentId - 部门id
* @param {number} params.query.woServiceTypeId - 服务类型id
* @param {string} params.query.woServiceTypeName - 服务类型名称
* @param {number} params.query.facilityTypeId - 设备分类ID
* @param {number} params.query.facilityId - 设备ID
* @param {string} params.query.hasCost - 是否收费 是否枚举{否=No-0, 是=Yes-1}
* @param {number} params.query.woServiceTypeRefId - 服务类型关联id
* @param {[number]} params.query.woPriorityIds - 优先级id
* @param {string} params.query.woPriorityName - 优先级名称
* @param {number} params.query.spBuildingId - 大楼ID
* @param {number} params.query.spFloorId - 楼层ID
* @param {number} params.query.spSpaceId - 空间ID
* @param {string} params.query.spBuildingName - 大楼名称
* @param {string} params.query.spFloorName - 楼层名称
* @param {string} params.query.spSpaceName - 空间名称
* @param {[number]} params.query.workTeamIds - 工作组ID
* @param {[number]} params.query.workerIds - 执行人ID
* @param {string} params.query.description - 问题描述
* @param {number} params.query.deDemandId - 关联的需求Id
* @param {string} params.query.deDemandCode - 关联的需求编码
* @param {string} params.query.createStartTime - 创建开始日期
* @param {string} params.query.createEndTime - 创建结束日期
* @param {string} params.query.actualEndStartTime - 完成日期开始
* @param {string} params.query.actualEndEndTime - 完成日期结束
* @param {[string]} params.query.status - 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
* @param {string} params.query.keyWord - 关键字筛选
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function tracingUsingGET(params) {
  return API.get(`/workorder/tracing`, { params: { ...params.query })
}

