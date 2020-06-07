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
 * @typedef {object} sign
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} acceptEmployeeListItem
 
 * @property {string} acceptTime 验收时间
 * @property {string} acceptTimeStr 验收时间 yyyy-MM-dd HH:mm
 * @property {string} createTime 创建时间
 * @property {number} employeeId 验收用户id
 * @property {string} employeeName 验收用户名称
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isAccepted 是否已验收
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {sign} sign 
 * @property {number} taskId 承接查验任务id
 *
*/

/**
 * @typedef {object} acceptRecordListItem
 
 * @property {string} acceptTime 验收时间
 * @property {string} acceptTimeStr 验收时间 yyyy-MM-dd HH:mm
 * @property {string} createTime 创建时间
 * @property {number} employeeId 验收用户id
 * @property {string} employeeName 验收用户名称
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isAccepted 是否已验收
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {sign} sign 
 * @property {number} taskId 承接查验任务id
 *
*/

/**
 * @typedef {object} accepterListItem
 * @property {string} type 验收人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} accepterId 验收用户/工作组id
 *
*/

/**
 * @typedef {object} checkerListItem
 * @property {string} type 查验人员类型 1-工作组 2-用户 {工作组=Group-1, 员工=User-2}
 * @property {number} checkerId 查验用户/工作组id
 *
*/

/**
 * @typedef {object} templatePoListItem
 
 * @property {number} id 模版id
 * @property {string} name 模版名称
 *
*/

/**
 * @typedef {object} facilityListItem
 
 * @property {number} facilityId 设备ID
 * @property {[templatePoListItem]} templatePoList
 *
*/

/**
 * @typedef {object} siteListItem
 
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 空间ID
 * @property {[templatePoListItem]} templatePoList
 *
*/

/**
 * @typedef {object} slaPriority
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} orgDepartmentId 部门id
 * @property {string} orgDepartmentName 部门名称
 * @property {number} priorityId 优先级id
 * @property {string} priorityName 优先级名称
 * @property {number} projectId 项目ID
 * @property {string} serviceTypePathName 服务类型全称
 * @property {number} spBuildingId 大楼ID
 * @property {number} spFloorId 楼层ID
 * @property {number} spSpaceId 房间ID
 * @property {string} spaceWholeName 空间位置
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 关联服务类型id
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/

/**
 * @typedef {object} data
 * @property {[acceptEmployeeListItem]} acceptEmployeeList
 * @property {[acceptRecordListItem]} acceptRecordList
 * @property {[accepterListItem]} accepterList
 * @property {[string]} actualCheckEmployeeNames
 * @property {[checkerListItem]} checkerList
 * @property {string} completedTime 完成时间
 * @property {string} completedTimeStr 完成时间 yyyy-MM-dd HH:mm
 * @property {string} createTime 创建时间
 * @property {string} description 查验说明
 * @property {number} exceptionNum 异常项数量
 * @property {[facilityListItem]} facilityList
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 任务名称
 * @property {number} priorityId 优先级id
 * @property {number} projectId 项目id
 * @property {[siteListItem]} siteList
 * @property {number} siteNum 位置数量
 * @property {number} slaId 流程设置id
 * @property {slaPriority} slaPriority 
 * @property {string} startTime 开始时间
 * @property {string} startTimeStr 开始时间 yyyy-MM-dd HH:mm
 * @property {string} status 任务状态 {已创建=Created-1, 处理中=InProgress-2, 已完成=Completed-3, 已验证=Acceptance-4}
 * @property {string} takeFrom 交验方
 * @property {string} takeOver 接管方
 * @property {string} workorderCode 整改工单编码
 * @property {number} workorderId 规整工单id
 * @property {string} workorderStatus 整改工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 *
*/

/**
 * @typedef {object} detailUsingGET_3Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_56Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_56Body
 * @property {[accepterListItem]} accepterList
 * @property {[checkerListItem]} checkerList
 * @property {string} description 查验说明
 * @property {[facilityListItem]} facilityList
 * @property {string} name 任务名称
 * @property {number} priorityId 优先级id
 * @property {[siteListItem]} siteList
 * @property {number} slaId 流程设置id
 * @property {string} startTime 开始时间
 * @property {string} takeFrom 交验方
 * @property {string} takeOver 接管方
 *
*/
/**
 * @tags undertake-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-task/detailUsingGET_3
 * @summary 承接查验-任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise<detailUsingGET_3Response>}
*/
export function detailUsingGET_3(params) {
  return API.get(`/undertake/task/${params.taskId}`, {})
}

/**
 * @tags undertake-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-task/updateUsingPUT_56
 * @summary 修改承接查验-任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @param {updateUsingPUT_56Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_56Response>}
*/
export function updateUsingPUT_56(params) {
  return API.put(`/undertake/task/${params.taskId}`, { ...params.body })
}

