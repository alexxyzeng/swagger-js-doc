/**
 * @typedef {object} data
 * @property {string} comment 提示
 * @property {number} failed 提交失败点位数
 * @property {number} success 提交成功点位数
 *
*/

/**
 * @typedef {object} submitUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
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
 * @typedef {object} contentsItem
 
 * @property {string} description 故障描述
 * @property {string} exception 异常
 * @property {string} exceptionHandleResult 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} exceptionHandleWay 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {string} faultDescription 故障描述
 * @property {files} files 
 * @property {number} id 内容id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} operationTime 操作时间
 * @property {number} operator 操作人
 * @property {string} result 巡检结果
 * @property {string} status 状态：1-未检 2-已检 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @property {number} taskObjectId 任务对象ID
 *
*/

/**
 * @typedef {object} objectsItem
 
 * @property {[contentsItem]} contents
 * @property {string} facilityStatus 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {string} patchEndTime 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @property {string} patchStartTime 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} realityStartTime 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @property {string} status 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @property {number} taskObjectId 任务对象ID
 *
*/

/**
 * @typedef {object} sitesItem
 
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {[objectsItem]} objects
 * @property {string} realityEndTime 实际结束时间
 * @property {string} realityStartTime 实际开始时间
 * @property {string} status 状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @property {number} taskJobId 巡检任务-工作任务ID
 *
*/

/**
 * @typedef {object} submitUsingPUTBody
 * @property {number} id 巡检任务id
 * @property {string} mark 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @property {[sitesItem]} sites
 * @property {string} status 状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}
 * @property {string} submit 提交 1-未提交 2-部分提交 3-全部提交 {未提交=Nd-1, 部分提交=Part-2, 全部提交=All-3}
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/submitUsingPUT
 * @summary 提交巡检任务
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {submitUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<submitUsingPUTResponse>}
*/
export function submitUsingPUT(params) {
  return API.put(`/inspect-task/submit/${params.id}`, { ...params.body })
}

