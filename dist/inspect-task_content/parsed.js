/**
 * @typedef {object} exceptions
 * @property {[string]} exceptions
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
 * @typedef {object} inputRange
 * @property {number} ceiling 上限
 * @property {number} lower 下限
 *
*/

/**
 * @typedef {object} optionsItem
 
 * @property {boolean} isRight 选项是否正确
 * @property {string} option 选项值
 *
*/

/**
 * @typedef {object} options
 * @property {inputRange} inputRange 
 * @property {[optionsItem]} options
 *
*/

/**
 * @typedef {object} workordersItem
 
 * @property {string} createTime 创建时间
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：现状处理、保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {string} workorderStatus 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 *
*/

/**
 * @typedef {object} contentItem
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {files} files 
 * @property {number} handleNum 操作记录数
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSituation 是否进行过现状处理 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {string} situationOperator 现状处理人
 * @property {string} situationTime 现状处理时间
 * @property {string} situationWay 现状处理 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} unit 单位
 * @property {[workordersItem]} workorders
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
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {files} files 
 * @property {number} handleNum 操作记录数
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSituation 是否进行过现状处理 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {string} situationOperator 现状处理人
 * @property {string} situationTime 现状处理时间
 * @property {string} situationWay 现状处理 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 * @property {[workordersItem]} workorders
 *
*/

/**
 * @typedef {object} findUsingGET_33Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_25Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_25Body
 * @property {string} content 内容
 * @property {number} contentId 内容ID
 * @property {string} defaultVal 默认值
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {exceptions} exceptions 
 * @property {number} facilityId 设备ID
 * @property {string} faultDescription 故障描述
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isCustom 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jobId 工作任务ID
 * @property {string} jobType 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} result 巡检结果
 * @property {string} runStatus 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @property {number} sort 顺序
 * @property {string} status 状态：1-正常 2-异常 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskId 任务ID
 * @property {number} taskJobId 任务点位工作任务ID
 * @property {number} taskObjectId 任务对象ID
 * @property {number} templateId 模板ID
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/

/**
 * @typedef {object} deleteUsingPUT_8Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findUsingGET_33
 * @summary 巡检任务-内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskObjectId - 巡检任务-工作任务-对象ID
* @param {number} params.query.taskJobId - 巡检任务-工作任务ID
* @param {string} params.query.jobType - 任务类型 1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {number} params.query.facilityId - 设备ID
* @param {string} params.query.runStatus - 设备状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.eqRunStatus - 设备状态-精确匹配 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.content - 巡检内容
* @param {string} params.query.result - 巡检结果
* @param {string} params.query.status - 状态 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
* @param {string} params.query.exceptionHandleResult - 异常处理结果 {已处理=Dispose-1, 未处理=Undispose-2}
* @param {string} params.query.exceptionHandleWay - 异常处理方式 {现状处理=Situation-1, 报修工单=Workorder-2}
* @param {string} params.query.faultDescription - 现场描述
 * @return {Promise<findUsingGET_33Response>}
*/
export function findUsingGET_33(params) {
  return API.get(`/inspect-task/content`, { params: { ...params.query })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/createUsingPOST_25
 * @summary 新增巡检任务-内容
 * @description 
 * @param {object} params
  * @param {createUsingPOST_25Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_25Response>}
*/
export function createUsingPOST_25(params) {
  return API.post(`/inspect-task/content`, { ...params.body })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/deleteUsingPUT_8
 * @summary 批量删除巡检任务-内容
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_8Response>}
*/
export function deleteUsingPUT_8(params) {
  return API.put(`/inspect-task/content`, { ...params.body })
}

