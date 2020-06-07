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
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
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
 * @typedef {object} findUsingGET_29Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_21Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_21Body
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
 * @typedef {object} deleteUsingPUT_5Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/findUsingGET_29
 * @summary 巡检点位-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 点位名称
* @param {string} params.query.address - 空间名称
 * @return {Promise<findUsingGET_29Response>}
*/
export function findUsingGET_29(params) {
  return API.get(`/inspect-site`, { params: { ...params.query })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/createUsingPOST_21
 * @summary 新增巡检点位
 * @description 
 * @param {object} params
  * @param {createUsingPOST_21Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_21Response>}
*/
export function createUsingPOST_21(params) {
  return API.post(`/inspect-site`, { ...params.body })
}

/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingPUT_5
 * @summary 批量删除巡检点位
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_5Response>}
*/
export function deleteUsingPUT_5(params) {
  return API.put(`/inspect-site`, { ...params.body })
}

