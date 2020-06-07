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
 * @typedef {object} contentItem
 
 * @property {string} brand 物资品牌
 * @property {string} code 物资编码
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isResidue 是否有库存 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} model 物资型号
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 物资名称
 * @property {number} paperNum 账面数量
 * @property {number} price 核定价格
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} safeStock 安全库存
 * @property {string} unit 物资单位
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
 * @property {string} brand 物资品牌
 * @property {string} code 物资编码
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isResidue 是否有库存 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} model 物资型号
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 物资名称
 * @property {number} paperNum 账面数量
 * @property {number} price 核定价格
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} safeStock 安全库存
 * @property {string} unit 物资单位
 *
*/

/**
 * @typedef {object} findUsingGET_46Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_31Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_31Body
 * @property {string} brand 物资品牌
 * @property {string} code 物资编码
 * @property {files} files 
 * @property {string} model 物资型号
 * @property {string} name 物资名称
 * @property {number} price 核定价格
 * @property {string} remark 备注
 * @property {number} safeStock 安全库存
 * @property {string} unit 物资单位
 *
*/

/**
 * @typedef {object} deleteUsingPUT_11Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findUsingGET_46
 * @summary 库存物资-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.code - 物资编码
* @param {string} params.query.name - 物资名称
* @param {string} params.query.brand - 物资品牌
* @param {string} params.query.model - 物资型号
* @param {string} params.query.unit - 物资单位
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {string} params.query.remark - 备注
* @param {string} params.query.hybrid - 编码或名称
* @param {number} params.query.warehouseId - 仓库ID,查询是否有库存时使用
 * @return {Promise<findUsingGET_46Response>}
*/
export function findUsingGET_46(params) {
  return API.get(`/material`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/createUsingPOST_31
 * @summary 新增库存物资
 * @description 
 * @param {object} params
  * @param {createUsingPOST_31Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_31Response>}
*/
export function createUsingPOST_31(params) {
  return API.post(`/material`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingPUT_11
 * @summary 批量删除库存物资
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_11Response>}
*/
export function deleteUsingPUT_11(params) {
  return API.put(`/material`, { ...params.body })
}

