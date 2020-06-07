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
 * @typedef {object} qrcodeUrl
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} nfcLabel 活码NFC标签
 * @property {number} projectId 项目id
 * @property {qrcodeUrl} qrcodeUrl 
 * @property {string} uniqueCode 唯一码，一般用来生成NFC标签和二维码的
 *
*/

/**
 * @typedef {object} findByIdUsingGET_40Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_48Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_48Body
 * @property {string} nfcLabel 活码NFC标签
 * @property {qrcodeUrl} qrcodeUrl 
 * @property {string} uniqueCode 唯一码，一般用来生成NFC标签和二维码的
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_46Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags qrcodedynamic
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/findByIdUsingGET_40
 * @summary 活码表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_40Response>}
*/
export function findByIdUsingGET_40(params) {
  return API.get(`/qrcodedynamic/${params.id}`, {})
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/updateUsingPUT_48
 * @summary 修改活码表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_48Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_48Response>}
*/
export function updateUsingPUT_48(params) {
  return API.put(`/qrcodedynamic/${params.id}`, { ...params.body })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/deleteUsingDELETE_46
 * @summary 删除活码表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_46Response>}
*/
export function deleteUsingDELETE_46(params) {
  return API.delete(`/qrcodedynamic/${params.id}`, {})
}

