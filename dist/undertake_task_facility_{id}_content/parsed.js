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
 * @typedef {object} contentListItem
 
 * @property {string} content 查验内容
 * @property {number} contentId 内容id
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isException 是否异常 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {number} objectId 对象id
 * @property {string} objectType 对象类型：1-位置 2-设备 {位置=Site-1, 设备=Facility-2}
 * @property {number} projectId 项目id
 * @property {string} result 查验结果，不带单位
 * @property {string} resultDesc 结果描述
 * @property {number} sort 顺序
 * @property {number} taskId 承接查验任务id
 * @property {number} templateId 模块ID
 * @property {string} templateName 模块名称
 * @property {string} unit 单位
 *
*/

/**
 * @typedef {object} templatePoListItem
 
 * @property {number} id 模版id
 * @property {string} name 模版名称
 *
*/

/**
 * @typedef {object} data
 * @property {number} checkEmployeeId 提交用户id
 * @property {string} checkEmployeeName 提交用户名称
 * @property {string} completedTime 完成时间
 * @property {string} completedTimeStr 完成时间 yyyy-MM-dd HH:mm
 * @property {[contentListItem]} contentList
 * @property {number} contentNum 查验内容数量
 * @property {string} createTime 创建时间
 * @property {number} exceptionNum 异常项数量
 * @property {string} facilityCode 设备编码
 * @property {number} facilityId 设备ID
 * @property {string} facilityMountSpace 设备安装位置
 * @property {string} facilityName 设备名称
 * @property {string} facilityTypeName 设备类型名称
 * @property {number} id 唯一id
 * @property {string} isCompleted 是否完成 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isException 是否异常
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} taskId 承接查验任务id
 * @property {[templatePoListItem]} templatePoList
 *
*/

/**
 * @typedef {object} findContentByIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-task-facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-task-facility/findContentByIdUsingGET
 * @summary 承接查验-任务-对象(设备)-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findContentByIdUsingGETResponse>}
*/
export function findContentByIdUsingGET(params) {
  return API.get(`/undertake/task/facility/${params.id}/content`, {})
}

