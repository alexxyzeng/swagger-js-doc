/**
 * @typedef {object} executorDtosItem
 
 * @property {string} createTime 创建时间
 * @property {number} employeeId 执行人id
 * @property {string} employeeName 执行人名称
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} woSlaId slaId
 * @property {number} woSlaPriorityId sla处理优先级id
 *
*/

/**
 * @typedef {object} notifierDtosItem
 
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} notifyId 通知人id
 * @property {string} notifyName 通知人名称
 * @property {string} notifyType 通知用户类型: 1-工作组 2-员工 {工作组=Group-1, 员工=User-2}
 * @property {number} projectId 项目ID
 * @property {number} woSlaId slaId
 * @property {number} woSlaNotificationId sla通知事件id
 * @property {number} woSlaPriorityId sla处理优先级id
 *
*/

/**
 * @typedef {object} notificationDtosItem
 * @property {string} type 通知类型 {创建=Create-1, 排程派工=Dispatch-2, 审批申请=Approval-3, 审批通过=ApprovalSuccess-4, 审批不通过=ApprovalFail-5, 验证通过=CheckSuccess-6, 验证不通过=CheckFail-7, 抢单成功=ScrambleSuccess-8, 全部暂停=AllSuspend-9, 终止=Termination-11, 完成=Complete-12, 未响应升级=NoResponseUpgrade-13, 未接单升级=NoAcceptUpgrade-14, 未完成升级=NoCompleteUpgrade-15, 审批提醒=PmApproval-16, 重新派工=AgainDispatch-17}
 * @property {string} fixNotifyRole 
 * @property {[string]} fixNotifyRoleSet
 * @property {number} id 优先级通知Id，更新时需将原id传回
 * @property {number} intervalTime 间隔时间 事件升级时，间隔时间不能为空
 * @property {string} name 通知名称
 * @property {[string]} noticeMethods
 * @property {string} notificationType 通知分类: 1-事件升级 2-固定提醒 3-自定义提醒 {事件升级=Event-1, 固定通知=Fix-2, 自定义通知=Customize-3}
 * @property {[number]} notifyIds
 * @property {string} notifyType 通知用户类型: 1-工作组 2-员工 事件升级及自定义提醒，此项不能为空 {工作组=Group-1, 员工=User-2}
 * @property {string} timeUnit 间隔时间单位 1-分钟 2-小时 3-天 事件升级时，间隔时间单位不能为空 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 *
*/

/**
 * @typedef {object} priorityDtosItem
 
 * @property {string} deliveryMethod 1-是否自动派工 2-是否智能派工 3-是否手动派工 {自动派工=Auto-1, 智能派工=Intelligent-2, 手动派工=Manual-3}
 * @property {[number]} executorIds
 * @property {string} isAllowScramble 是否允许抢单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {[notificationDtosItem]} notificationDtos
 * @property {number} scrambleTime 允许抢单时间 允许抢单时该字段不能为空
 * @property {string} timeUnit 抢单时间单位 1-分钟 2-小时 3-天 允许抢单时该字段不能为空 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} woPriorityId 优先级id
 * @property {number} workTeamId 工作组id
 *
*/

/**
 * @typedef {object} data
 * @property {string} autoArchive 是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} orgDepartmentId 部门id
 * @property {string} orgDepartmentName 部门名称
 * @property {[priorityDtosItem]} priorityDtos
 * @property {[number]} priorityId
 * @property {number} projectId 项目ID
 * @property {string} serviceTypePathName 服务类型全称
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间ID
 * @property {string} spSpaceName 房间名称
 * @property {string} spaceWholeName 位置全称
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 关联服务类型id
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/

/**
 * @typedef {object} createUsingPOST_42Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_42Body
 * @property {string} autoArchive 是否自动存档 0-否 1-是 默认值为0 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} orgDepartmentId 部门id
 * @property {[priorityDtosItem]} priorityDtos
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 房间ID
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 关联服务类型id 集团版必传
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @tags workorder-sla
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-sla/createUsingPOST_42
 * @summary 新增sla
 * @description 
 * @param {object} params
  * @param {createUsingPOST_42Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_42Response>}
*/
export function createUsingPOST_42(params) {
  return API.post(`/workorder/sla`, { ...params.body })
}

