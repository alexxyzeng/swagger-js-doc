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
 * @typedef {object} data
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} filesUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_8Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_8Body
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @tags service-center-demand-track
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/filesUsingGET
 * @summary 查询需求跟进附件
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @return {Promise<filesUsingGETResponse>}
*/
export function filesUsingGET(params) {
  return API.get(`/demand/${params.demand-id}/track/files`, {})
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/updateUsingPUT_8
 * @summary 修改需求跟进附件
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {updateUsingPUT_8Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_8Response>}
*/
export function updateUsingPUT_8(params) {
  return API.put(`/demand/${params.demand-id}/track/files`, { ...params.body })
}

