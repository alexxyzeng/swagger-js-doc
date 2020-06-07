/**
 * @typedef {object} acceptedByTaskIdUsingPUTResponse
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
 * @typedef {object} sign
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} acceptedByTaskIdUsingPUTBody
 * @property {files} files 
 * @property {string} remark 备注
 * @property {sign} sign 
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/acceptedByTaskIdUsingPUT
 * @summary 对象完成验收
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @param {acceptedByTaskIdUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<acceptedByTaskIdUsingPUTResponse>}
*/
export function acceptedByTaskIdUsingPUT(params) {
  return API.put(`/undertake/app/accepted/${params.taskId}`, { ...params.body })
}

