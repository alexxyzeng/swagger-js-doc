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
 * @property {string} actualEndTime 实际结束时间
 * @property {string} actualStartTime 实际开始时间
 * @property {string} appointmentEndTime 预约结束时间(服务中心)/计划结束时间(预防性维护)
 * @property {string} appointmentStartTime 预约开始时间(服务中心)/计划开始时间(预防性维护)
 * @property {approval} approval 
 * @property {string} code 工单编码
 * @property {[contentRspDtosItem]} contentRspDtos
 * @property {[costRspDtosItem]} costRspDtos
 * @property {string} createTime 创建时间
 * @property {number} creator 创建人id
 * @property {customerSign} customerSign 
 * @property {number} deDemandId 关联的需求Id
 * @property {string} description 问题描述
 * @property {evaluateDto} evaluateDto 
 * @property {[executorRspDtosItem]} executorRspDtos
 * @property {string} expectEndTime 预计结束时间
 * @property {string} expectStartTime 预计开始时间
 * @property {string} expectWorkTime 预计工作时长
 * @property {[facilityRspDtosItem]} facilityRspDtos
 * @property {files} files 
 * @property {string} hasPermission 是否具备工单追踪权限 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} id 由程序分配的唯一ID
 * @property {[initSpaceRspDtosItem]} initSpaceRspDtos
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSyncToolCost 是否同步工具费用 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} maintPlanId 维保计划Id
 * @property {string} maintPlanName 维保计划名称
 * @property {string} modifyTime 最后的修改时间
 * @property {string} orgDepartmentName 部门名称
 * @property {permissionDto} permissionDto 
 * @property {string} phone 手机号
 * @property {pmExtend} pmExtend 
 * @property {[pmMaintStepRspDtosItem]} pmMaintStepRspDtos
 * @property {[spaceRspDtosItem]} spaceRspDtos
 * @property {string} status 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 * @property {string} statusValue 工单状态
 * @property {supervisorSign} supervisorSign 
 * @property {number} suspendTime 工作暂停时间 单位:分钟
 * @property {[toolRspDtosItem]} toolRspDtos
 * @property {boolean} transfer 
 * @property {string} username 报修人名称
 * @property {string} woPriorityName 优先级名称
 * @property {string} woServiceTypeName 服务类型名称
 * @property {string} woServiceTypePathName 服务类型全称
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 * @property {string} workTeamName 工作组名称
 * @property {number} workteamId 工单对应的工作组id
 *
*/

/**
 * @typedef {object} searchUsingGET_7Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} approval
 * @property {string} content 审批内容
 * @property {string} createTime 创建时间
 * @property {number} employeeId 处理人id
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCreatedApproval 是否维保工单创建审批申请
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {string} status 审批结果 0-拒绝 1-通过 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} woCode 工单编码
 * @property {string} woDescription 工单描述
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} fileTypesItem
 
 * @property {string} contentType 文件ContentType
 * @property {number} fileId 文件Id
 * @property {string} fileName 文件名称
 * @property {number} fileSize 文件大小
 * @property {string} fileType 文件类型 文件类型{图片=Image-1, 视频=Video-2, 音频=Voice-3, 附件=Attachment-4}
 * @property {string} ossUrl ossUrl文件下载地址
 * @property {string} path 公共上传服务返回id，用于下载
 * @property {string} storeFileName 存储文件名，用于返回ossUrl地址
 * @property {string} url 公共服务文件下载地址
 *
*/

/**
 * @typedef {object} files
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} contentRspDtosItem
 
 * @property {string} content 工作内容
 * @property {string} createTime 创建时间
 * @property {number} creator 创建人
 * @property {string} creatorName 创建人名称
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} costRspDtosItem
 
 * @property {number} cost 花费
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isToolCost 是否工具同步费用 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 收费项名称
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} customerSign
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} satisfactionsItem
 * @property {string} type 类型 {服务质量=ServiceQuality-1, 服务速度=ServiceSpeed-2, 服务态度=ServiceAttitude-3}
 * @property {string} createTime 创建时间
 * @property {string} grade 评级
 * @property {number} id 由程序分配的唯一ID
 * @property {number} maxStar 最大星数
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} score 分值
 * @property {number} star 当前星数
 * @property {number} woEvaluateId 评价id
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} evaluateDto
 * @property {string} createTime 创建时间
 * @property {string} feedback 反馈意见
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {[satisfactionsItem]} satisfactions
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} executorRspDtosItem
 
 * @property {string} acceptTime 接单/抢单时间
 * @property {string} createTime 创建时间
 * @property {string} dispatchedType 派单方式 1-自动派单 2-智能排单 3-抢单 4-指派 {自动派单=AutoDispatch-1, 智能派单=IntelligentDispatch-2, 排程派工=ManualDispatch-3, 抢单=Scramble-4, 增派=AddExecutor-5}
 * @property {number} execEmployeeId 执行员工id
 * @property {string} execEmployeeName 执行员工名称
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isCharged 是否负责人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {boolean} notEnd 
 * @property {string} phone 执行人电话
 * @property {number} projectId 项目ID
 * @property {string} status 执行人状态 {未接单=NoOrder-1, 已接单=Order-2, 暂停中=Pause-3, 已上交=Submitted-4, 已退单=Chargeback-5}
 * @property {number} woDispatcherId 工单_派工人id
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} processFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} siteFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} facilityRspDtosItem
 
 * @property {string} createTime 创建时间
 * @property {number} facFacilityId 设备id
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} mountSpace 位置
 * @property {string} processDesc 处理方式
 * @property {processFiles} processFiles 
 * @property {number} projectId 项目ID
 * @property {string} siteDesc 现场描述
 * @property {siteFiles} siteFiles 
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} initSpaceRspDtosItem
 
 * @property {string} createTime 创建时间
 * @property {string} description 处理方式
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大楼id
 * @property {string} spBuildingName 楼宇名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间id
 * @property {string} spSpaceName 房间名称
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} permissionDto
 * @property {string} edit 是否可编辑 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {[string]} eventList
 *
*/

/**
 * @typedef {object} pmExtend
 * @property {number} cycle 维保周期
 * @property {string} cycleUnit 周期单位 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @property {string} effectDesc 影响
 * @property {files} files 
 * @property {string} isScanQRCode 是否通过扫码访问设备 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} maintName 维保名称
 * @property {number} maintPlanId 维保任务ID
 * @property {string} woPriority 优先级
 *
*/

/**
 * @typedef {object} pmMaintStepRspDtosItem
 
 * @property {string} canEdit 是否可以编辑此步骤 0、不可以 1、可以 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isComplete 是否完成 0、未完成 1、已完成 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} maintPlanId 维保任务id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} sort 顺序
 * @property {string} stepDesc 工作描述
 * @property {string} stepName 步骤
 * @property {number} workTeamId 工作组id
 * @property {string} workTeamName 工作组名字
 *
*/

/**
 * @typedef {object} spaceRspDtosItem
 
 * @property {string} createTime 创建时间
 * @property {string} description 处理方式
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大楼id
 * @property {string} spBuildingName 楼宇名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间id
 * @property {string} spSpaceName 房间名称
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} supervisorSign
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} toolRspDtosItem
 
 * @property {number} cost 花费 单位：元
 * @property {number} count 数量
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} model 工具型号
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 工具名称
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {string} unit 单位
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} createUsingPOST_57Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} spaceDtosItem
 
 * @property {string} description 处理方式
 * @property {files} files 
 * @property {number} spBuildingId 大楼id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 房间id
 *
*/

/**
 * @typedef {object} createUsingPOST_57Body
 * @property {string} description 问题描述
 * @property {[number]} facilities
 * @property {files} files 
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} orgDepartmentId 部门id
 * @property {string} phone 联系电话
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 服务类型关联id, 集团版必传
 * @property {number} woSlaId slaId
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/searchUsingGET_7
 * @summary 工单查询
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
 * @return {Promise<searchUsingGET_7Response>}
*/
export function searchUsingGET_7(params) {
  return API.get(`/workorder`, { params: { ...params.query })
}

/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/createUsingPOST_57
 * @summary 创建工单
 * @description 
 * @param {object} params
  * @param {createUsingPOST_57Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_57Response>}
*/
export function createUsingPOST_57(params) {
  return API.post(`/workorder`, { ...params.body })
}

