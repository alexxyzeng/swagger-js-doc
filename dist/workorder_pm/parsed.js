/**
 * @typedef {object} contentItem
 
 * @property {string} actualEndTime 完成日期
 * @property {string} appointmentEndTime 维保计划结束时间
 * @property {string} appointmentStartTime 维保计划开始时间
 * @property {boolean} approval 
 * @property {string} code 工单编码
 * @property {string} createTime 创建开始日期
 * @property {string} deDemandCode 关联的需求编码
 * @property {number} deDemandId 关联的需求Id
 * @property {string} description 问题描述
 * @property {string} hasCost 是否收费 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isApproval 是否在审批中 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} maintPlanName 维保计划名称
 * @property {string} phone 联系电话
 * @property {string} spaceDesc 位置
 * @property {string} status 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {string} woPriorityName 优先级名称
 * @property {number} woServiceTypeId 服务类型id
 * @property {string} woServiceTypeName 服务类型名称
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 * @property {number} workTeamId 工作组id
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

/**
 * @typedef {object} data
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} searchUsingGET_9Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-pm/searchUsingGET_9
 * @summary 工单查询-PM
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {[number]} params.query.workTeamIds - 工作组ID
* @param {[number]} params.query.workerIds - 执行人ID
* @param {number} params.query.spBuildingId - 大楼ID
* @param {number} params.query.spFloorId - 楼层ID
* @param {number} params.query.spSpaceId - 空间ID
* @param {number} params.query.facilityId - 设备ID
* @param {string} params.query.code - 工单编码
* @param {string} params.query.description - 问题描述
* @param {[string]} params.query.status - 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
* @param {string} params.query.createStartTime - 创建开始日期
* @param {string} params.query.createEndTime - 创建结束日期
* @param {string} params.query.actualEndStartTime - 完成日期开始
* @param {string} params.query.actualEndEndTime - 完成日期结束
* @param {string} params.query.maintPlanName - 维保计划名称
* @param {string} params.query.pmKeyWord - PM关键字筛选
 * @return {Promise<searchUsingGET_9Response>}
*/
export function searchUsingGET_9(params) {
  return API.get(`/workorder/pm`, { params: { ...params.query })
}

