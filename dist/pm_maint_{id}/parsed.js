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
 
 * @property {number} facilityTypeId 设备类型ID
 * @property {number} id 唯一id
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
 
 * @property {number} id 唯一id
 * @property {number} maintId 
 * @property {string} materialBrand 物资品牌
 * @property {string} materialCode 物资编码
 * @property {number} materialId 物资id
 * @property {string} materialModel 物资型号
 * @property {string} materialName 物资名称
 * @property {number} materialUnit 物资单位
 * @property {number} projectId 
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
 * @property {number} id 唯一id
 * @property {[string]} messageTypes
 * @property {noticeTime} noticeTime 
 * @property {string} noticeType 通知类型1-审批提醒；2-完成升级提醒；3-工作提醒 {审批提醒=Approve-1, 完成升级提醒=Promotion-2, 工作提醒=Work-3}
 * @property {receiveId} receiveId 
 *
*/

/**
 * @typedef {object} spacesItem
 
 * @property {number} id 唯一id
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
 
 * @property {number} id 唯一id
 * @property {string} stepName 步骤
 * @property {number} workTeamId 工作组id
 *
*/

/**
 * @typedef {object} toolsItem
 
 * @property {number} cost 花费
 * @property {number} id 唯一id
 * @property {number} toolCount 数量
 * @property {string} toolModel 工具型号
 * @property {string} toolName 工具名称
 *
*/

/**
 * @typedef {object} workTeamsItem
 
 * @property {number} id 唯一id
 * @property {number} workTeamId 工作组id
 *
*/

/**
 * @typedef {object} data
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
 * @typedef {object} findByIdUsingGET_33Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_41Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} approver
 * @property {[number]} approver
 * @property {boolean} empty 
 *
*/

/**
 * @typedef {object} updateUsingPUT_41Body
 * @property {approver} approver 
 * @property {number} beginMonth 维保时间开始
 * @property {number} cycle 维保周期
 * @property {string} cycleUnit 周期单位:1-天;2-周;3-月;4-季;5年 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @property {string} effect 影响
 * @property {number} endMonth 维保时间结束
 * @property {[number]} excludeFacilityIds
 * @property {[number]} facilityIds
 * @property {[facilityTypesItem]} facilityTypes
 * @property {files} files 
 * @property {string} firstDate 首次维保日期
 * @property {generateTime} generateTime 
 * @property {string} isAllYear 是否全年 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isApprove 是否审批 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoArchive 是否自动存档 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isAutoWorkorder 是否自动生成工单 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isCopySave 是否拷贝保存 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isFacilityQrcode 是否通过扫码访问设备 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSlideCycle 是否滑动周期 1-是；0-否 是否枚举{否=No-0, 是=Yes-1}
 * @property {[materialsItem]} materials
 * @property {string} name 维保名称
 * @property {[noticesItem]} notices
 * @property {number} oriMaintId 拷贝前维保设置id
 * @property {number} predictTime 维保时长
 * @property {string} predictUnit 维保时长单位:1-分钟;2-小时;3-天;4-月;5-年 {分钟=Min-1, 小时=Hour-2, 天=Day-3, 月=Month-4, 年=Year-5}
 * @property {string} priorityName 优先级名称：一般、紧急、紧急重要
 * @property {[spacesItem]} spaces
 * @property {string} status 计划状态 1-启用 2-暂停 {启用=Enable-1, 暂停=Pause-2}
 * @property {[stepsItem]} steps
 * @property {number} storeId 仓库id
 * @property {string} storeName 仓库名称
 * @property {[toolsItem]} tools
 * @property {[workTeamsItem]} workTeams
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_33Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm/findByIdUsingGET_33
 * @summary 维保规则-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_33Response>}
*/
export function findByIdUsingGET_33(params) {
  return API.get(`/pm/maint/${params.id}`, {})
}

/**
 * @tags pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm/updateUsingPUT_41
 * @summary 修改设置
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_41Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_41Response>}
*/
export function updateUsingPUT_41(params) {
  return API.put(`/pm/maint/${params.id}`, { ...params.body })
}

/**
 * @tags pm
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/pm/deleteUsingDELETE_33
 * @summary 删除设置
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_33Response>}
*/
export function deleteUsingDELETE_33(params) {
  return API.delete(`/pm/maint/${params.id}`, {})
}

