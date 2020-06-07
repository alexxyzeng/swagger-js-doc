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
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
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
 * @typedef {object} findUsingGET_53Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_40Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_40Body
 * @property {string} nfcLabel 活码NFC标签
 * @property {qrcodeUrl} qrcodeUrl 
 * @property {string} uniqueCode 唯一码，一般用来生成NFC标签和二维码的
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_45Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags qrcodedynamic
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/findUsingGET_53
 * @summary 活码表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_53Response>}
*/
export function findUsingGET_53(params) {
  return API.get(`/qrcodedynamic`, { params: { ...params.query })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/createUsingPOST_40
 * @summary 新增活码表
 * @description 
 * @param {object} params
  * @param {createUsingPOST_40Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_40Response>}
*/
export function createUsingPOST_40(params) {
  return API.post(`/qrcodedynamic`, { ...params.body })
}

/**
 * @tags qrcodedynamic
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/qrcodedynamic/deleteUsingDELETE_45
 * @summary 批量删除活码表
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_45Response>}
*/
export function deleteUsingDELETE_45(params) {
  return API.delete(`/qrcodedynamic`, { ...params.body })
}

