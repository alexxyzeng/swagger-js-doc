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
 * @typedef {object} situationUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
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
 * @typedef {object} situationUsingPOSTBody
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {[workordersItem]} workorders
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/situationUsingPOST
 * @summary 新增巡检任务-现状处理
 * @description 
 * @param {object} params
  * @param {situationUsingPOSTBody} params.body - 请求体 [object Object]
 * @return {Promise<situationUsingPOSTResponse>}
*/
export function situationUsingPOST(params) {
  return API.post(`/inspect-task/handle/situation`, { ...params.body })
}

