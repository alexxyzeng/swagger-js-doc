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
 * @typedef {object} findByIdUsingGET_7Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_7Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_7Body
 * @property {string} content 跟进内容
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} remark 备注
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_5Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-track
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/findByIdUsingGET_7
 * @summary 需求跟进记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_7Response>}
*/
export function findByIdUsingGET_7(params) {
  return API.get(`/demand/track/${params.id}`, {})
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/updateUsingPUT_7
 * @summary 修改需求跟进记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_7Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_7Response>}
*/
export function updateUsingPUT_7(params) {
  return API.put(`/demand/track/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-track/deleteUsingDELETE_5
 * @summary 删除需求跟进记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_5Response>}
*/
export function deleteUsingDELETE_5(params) {
  return API.delete(`/demand/track/${params.id}`, {})
}

