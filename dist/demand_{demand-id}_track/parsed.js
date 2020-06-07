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
 * @property {string} content 跟进内容
 * @property {string} createTime 创建时间
 * @property {number} creator 创建者
 * @property {number} demandId 需求ID
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {number} modifier 修改者
 * @property {string} modifyTime 修改时间
 * @property {number} projectId 项目ID
 * @property {string} remark 备注
 * @property {number} trackBy 跟进人
 * @property {number} trackType 跟进类型
 *
*/

/**
 * @typedef {object} createUsingPOST_4Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_4Body
 * @property {string} content 跟进内容
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} remark 备注
 *
*/
/**
 * @tags service-center-demand-track
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/createUsingPOST_4
 * @summary 新增需求跟进记录
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {createUsingPOST_4Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_4Response>}
*/
export function createUsingPOST_4(params) {
  return API.post(`/demand/${params.demand-id}/track`, { ...params.body })
}

