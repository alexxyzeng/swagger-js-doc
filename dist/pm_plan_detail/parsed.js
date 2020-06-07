/**
 * @typedef {object} approverListItem
 
 * @property {number} employeeId 
 * @property {string} employeeName 
 *
*/

/**
 * @typedef {object} facilitiesItem
 
 * @property {string} createTime 创建时间
 * @property {string} facilityCode 设备编码
 * @property {number} facilityId 设备ID
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类展示
 * @property {number} facilityTypeId 系统分类
 * @property {number} id 唯一id
 * @property {number} maintId 维保id
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {number} spBuildingId 大厦
 * @property {number} spFloorId 楼层
 * @property {number} spSpaceId 房间
 *
*/

/**
 * @typedef {object} facilityTypesItem
 
 * @property {string} createTime 创建时间
 * @property {number} facilityTypeId 设备类型ID
 * @property {string} facilityTypeName 设备类型名称
 * @property {number} id 唯一id
 * @property {number} maintId 维保id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
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
 * @typedef {object} firstTime
 * @property {number} hour 
 * @property {number} minute 
 * @property {number} nano 
 * @property {number} second 
 *
*/

/**
 * @typedef {object} generateTime
 * @property {number} hour 
 * @property {number} minute 
 * @property {number} nano 
 * @property {number} second 
 *
*/

/**
 * @typedef {object} materialsItem
 
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {number} maintId 维保规则id
 * @property {string} materialBrand 物资品牌
 * @property {string} materialCode 物资编码
 * @property {number} materialId 物资id
 * @property {string} materialModel 物资型号
 * @property {string} materialName 物资名称
 * @property {number} materialUnit 物资单位
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} reserveCount 预定数量
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {number} workTeamId 工作组id
 *
*/

/**
 * @typedef {object} noticeTime
 * @property {number} hour 
 * @property {number} minute 
 * @property {number} nano 
 * @property {number} second 
 *
*/

/**
 * @typedef {object} receiveId
 * @property {[number]} receiver
 *
*/

/**
 * @typedef {object} receiversItem
 
 * @property {number} receiverId 接收人id
 * @property {string} receiverName 接收人名称
 *
*/

/**
 * @typedef {object} noticesItem
 
 * @property {number} advanceDays 提前天数
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {number} maintId 维保id
 * @property {[string]} messageTypes
 * @property {string} modifyTime 最后修改时间
 * @property {noticeTime} noticeTime 
 * @property {string} noticeType 通知类型1-审批提醒；2-完成升级提醒；3-工作提醒 {审批提醒=Approve-1, 完成升级提醒=Promotion-2, 工作提醒=Work-3}
 * @property {number} projectId 项目id
 * @property {receiveId} receiveId 
 * @property {[receiversItem]} receivers
 * @property {string} remark 备注
 *
*/

/**
 * @typedef {object} spacesItem
 
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {number} maintId 维保id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} spBuildingId 大厦id
 * @property {string} spBuildingName 大厦名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间id
 * @property {string} spSpaceName 空间名称
 *
*/

/**
 * @typedef {object} stepsItem
 
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {number} maintId 维保规则id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} sort 顺序
 * @property {string} stepDesc 步骤描述
 * @property {string} stepName 步骤
 * @property {number} workTeamId 工作组id
 * @property {string} workTeamName 工作组名称
 *
*/

/**
 * @typedef {object} toolsItem
 
 * @property {number} cost 花费 单位:元
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {number} maintId 维保id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} toolCount 数量
 * @property {string} toolModel 工具规格/型号
 * @property {string} toolName 工具名称
 *
*/

/**
 * @typedef {object} workTeamsItem
 
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {string} isStep 是否加入维保步骤0-否；1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} maintId 维保id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} workTeamId 工作组id
 * @property {string} workTeamName 工作组名称
 *
*/

/**
 * @typedef {object} maint
 * @property {number} advanceDays 提前天数
 * @property {[approverListItem]} approverList
 * @property {number} beginMonth 维保时间开始
 * @property {number} copyNum 已经拷贝次数
 * @property {string} createTime 创建时间
 * @property {number} cycle 维保周期
 * @property {string} cycleUnit 周期单位 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @property {string} effect 影响
 * @property {number} endMonth 维保时间结束
 * @property {[number]} excludeFacilityIds
 * @property {string} extend 扩展
 * @property {[facilitiesItem]} facilities
 * @property {string} facilityType 设备分类
 * @property {[facilityTypesItem]} facilityTypes
 * @property {files} files 
 * @property {string} firstDate 首次维保日期
 * @property {firstTime} firstTime 
 * @property {generateTime} generateTime 
 * @property {number} id 唯一id
 * @property {string} isAllYear 是否全年 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isApprove 是否审批 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoArchive 是否自动存档 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoWorkorder 是否自动生成工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isFacilityQrcode 是否通过扫码访问设备 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isImport 是否批量导入数据，更新后修改为否 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSlideCycle 是否滑动周期1-是；0-否 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} lastDate 最后一次维保日期
 * @property {[materialsItem]} materials
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 维保名称
 * @property {string} nextDate 下次维保时间，可能是按周期计算，也可能是手动添加，用于前端展示
 * @property {[noticesItem]} notices
 * @property {number} predictTime 预估时间
 * @property {string} predictUnit 预估时间单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min-1, 小时=Hour-2, 天=Day-3, 月=Month-4, 年=Year-5}
 * @property {string} priorityName 优先级名称
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {string} slideStartDate 滑动起始日期
 * @property {[spacesItem]} spaces
 * @property {string} status 设置状态 1-启用 2-启用 {启用=Enable-1, 暂停=Pause-2}
 * @property {[stepsItem]} steps
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {[toolsItem]} tools
 * @property {[workTeamsItem]} workTeams
 *
*/

/**
 * @typedef {object} workorderListItem
 
 * @property {string} appointmentEndTime 计划结束时间
 * @property {string} appointmentStartTime 计划开始时间
 * @property {string} createTime 创建时间
 * @property {string} extend 扩展
 * @property {number} id 唯一id
 * @property {string} isComplete 工单是否完成：0、未完成 1、已完成 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} maintId 维保id
 * @property {number} maintPlanId 维保任务id
 * @property {string} maintPlanName 维保计划名称
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} workTeamId 工作组id
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单id
 * @property {string} workorderStatus 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} isGenWorkorder 是否生成工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isGenerated 是否已生成计划 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {maint} maint 
 * @property {number} maintId 维保规则id
 * @property {string} modifyTime 最后修改时间
 * @property {string} planDate 计划日期
 * @property {string} planEndTime 计划结束时间
 * @property {string} planStartTime 计划开始时间
 * @property {number} projectId 项目id
 * @property {string} status 计划状态1-未开始;2-处理中;3-已完成;4-已过期;5-逾期 {未开始=NotBegin-1, 处理中=InProgress-2, 已完成=JobDone-3, 已过期=Expired-4, 已逾期=Overdue-5}
 * @property {[workorderListItem]} workorderList
 *
*/

/**
 * @typedef {object} detailUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm-plan/detailUsingGET
 * @summary 查询计划详情
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.maintId - 设置id
* @param {string} params.query.planDate - 计划日期
 * @return {Promise<detailUsingGETResponse>}
*/
export function detailUsingGET(params) {
  return API.get(`/pm/plan/detail`, { params: { ...params.query })
}

