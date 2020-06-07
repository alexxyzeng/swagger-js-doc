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
 * @typedef {object} processFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} siteFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} facFacilityId 设备id
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} mountSpace 位置
 * @property {string} processDesc 处理方式
 * @property {processFiles} processFiles 
 * @property {number} projectId 项目ID
 * @property {string} siteDesc 现场描述
 * @property {siteFiles} siteFiles 
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} createUsingPOST_59Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_59Body
 * @property {string} createTime 创建时间
 * @property {number} facFacilityId 设备id
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} mountSpace 位置
 * @property {string} processDesc 处理方式
 * @property {processFiles} processFiles 
 * @property {number} projectId 项目ID
 * @property {string} siteDesc 现场描述
 * @property {siteFiles} siteFiles 
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @tags workorder-facility
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-facility/createUsingPOST_59
 * @summary 创建工单对应的设备
 * @description 
 * @param {object} params
  * @param {createUsingPOST_59Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_59Response>}
*/
export function createUsingPOST_59(params) {
  return API.post(`/workorder-facility`, { ...params.body })
}

