/**
 * @typedef {object} checkedByObjectIdUsingPUTResponse
 * @property {number} code 业务响应状态
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
 * @typedef {object} andGetIsException
 * @property {string} content 查验内容
 * @property {string} createTime 创建时间
 * @property {string} defaultVal 默认值
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isException 是否异常 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {number} objectId 对象id
 * @property {string} objectType 对象类型：1-位置 2-设备 {位置=Site-1, 设备=Facility-2}
 * @property {options} options 
 * @property {number} projectId 项目id
 * @property {string} result 查验结果
 * @property {string} resultDesc 结果描述
 * @property {number} taskId 承接查验任务id
 * @property {string} type 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @property {string} unit 单位
 *
*/

/**
 * @typedef {object} contentsItem
 
 * @property {andGetIsException} andGetIsException 
 * @property {files} files 
 * @property {number} id 查验内容id
 * @property {string} result 查验结果，不带单位
 * @property {string} resultDesc 记录
 *
*/

/**
 * @typedef {object} checkedByObjectIdUsingPUTBody
 * @property {[contentsItem]} contents
 * @property {number} exceptionNum 异常查验数量
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/checkedByObjectIdUsingPUT
 * @summary 对象完成查验
 * @description 
 * @param {object} params
 * @param {number} params.objectId - path
* @param {string} params.objectType - path
 * @param {checkedByObjectIdUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<checkedByObjectIdUsingPUTResponse>}
*/
export function checkedByObjectIdUsingPUT(params) {
  return API.put(`/undertake/app/checked/${params.objectId}/${params.objectType}`, { ...params.body })
}

