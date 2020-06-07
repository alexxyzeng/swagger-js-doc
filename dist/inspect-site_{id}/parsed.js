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
 * @typedef {object} qrcode
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} data
 * @property {string} address 位置
 * @property {string} code 编号
 * @property {string} createTime 创建时间
 * @property {string} dynamicQrcode 二维码活码
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 名称
 * @property {string} nfcLabel NFC标签
 * @property {number} projectId 项目id
 * @property {qrcode} qrcode 
 * @property {string} qrcodeStr 二维码地址-String
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/

/**
 * @typedef {object} findByIdUsingGET_19Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_27Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_27Body
 * @property {string} code 编号
 * @property {number} id 唯一id
 * @property {string} name 名称
 * @property {string} nfcLabel NFC标签
 * @property {number} projectId 项目id
 * @property {qrcode} qrcode 
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 大楼名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_25Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findByIdUsingGET_19
 * @summary 巡检点位-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_19Response>}
*/
export function findByIdUsingGET_19(params) {
  return API.get(`/inspect-site/${params.id}`, {})
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/updateUsingPUT_27
 * @summary 修改巡检点位-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_27Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_27Response>}
*/
export function updateUsingPUT_27(params) {
  return API.put(`/inspect-site/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingDELETE_25
 * @summary 删除巡检点位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_25Response>}
*/
export function deleteUsingDELETE_25(params) {
  return API.delete(`/inspect-site/${params.id}`, {})
}

