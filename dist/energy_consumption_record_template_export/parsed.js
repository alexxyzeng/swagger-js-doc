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
 * @typedef {object} fileUrl
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} data
 * @property {fileUrl} fileUrl 
 * @property {string} fileUrlStr 结果文件地址-String
 * @property {string} importStatus 执行结果 {成功=Success-1, 部分失败=PartialFail-2, 处理中=Processing-3}
 *
*/

/**
 * @typedef {object} exportTemplateUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record/exportTemplateUsingGET
 * @summary 能耗记录模版导出
 * @description 
 * @param {object} params
 
 * @return {Promise<exportTemplateUsingGETResponse>}
*/
export function exportTemplateUsingGET() {
  return API.get(`/energy/consumption/record/template/export`, {})
}

