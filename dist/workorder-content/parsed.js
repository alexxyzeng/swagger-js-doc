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
 * @typedef {object} data
 * @property {string} content 工作内容
 * @property {string} createTime 创建时间
 * @property {number} creator 创建人
 * @property {string} creatorName 创建人名称
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} createUsingPOST_56Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_56Body
 * @property {string} content 工作内容
 * @property {string} createTime 创建时间
 * @property {number} creator 创建人
 * @property {string} creatorName 创建人名称
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @tags workorder-content
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-content/createUsingPOST_56
 * @summary 创建工作内容
 * @description 
 * @param {object} params
  * @param {createUsingPOST_56Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_56Response>}
*/
export function createUsingPOST_56(params) {
  return API.post(`/workorder-content`, { ...params.body })
}
