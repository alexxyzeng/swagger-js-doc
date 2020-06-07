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
 * @typedef {object} dataItem
 
 * @property {string} content 处理内容
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isProcessed 是否处理过的节点 0-否 1-是, app接口使用 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} jumpWorkorderId 跳转工单id
 * @property {string} modifyTime 最后的修改时间
 * @property {number} processBy 处理人id
 * @property {string} processTypeDesc 处理类型描述
 * @property {string} processorAvatarUrl 处理人头像地址
 * @property {string} processorName 处理人名称
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} searchUsingGET_10Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-process/searchUsingGET_10
 * @summary 查询工单历史记录
 * @description 
 * @param {object} params
 * @param {number} params.woId - path
 * @return {Promise<searchUsingGET_10Response>}
*/
export function searchUsingGET_10(params) {
  return API.get(`/workorder-process/${params.woId}`, {})
}

