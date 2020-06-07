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
 * @typedef {object} qrCode
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {number} lockNum 锁定数量
 * @property {string} materialBrand 物资品牌
 * @property {string} materialCode 物资编码
 * @property {number} materialId 物资ID
 * @property {string} materialModel 物资型号
 * @property {string} materialName 物资名称
 * @property {string} materialPrice 核定价格
 * @property {string} materialRemark 物资备注
 * @property {string} materialUnit 物资单位
 * @property {string} modifyTime 最后修改时间
 * @property {number} paperNum 账面数量
 * @property {number} projectId 项目id
 * @property {qrCode} qrCode 
 * @property {string} qrCodeStr 库存二维码地址-String
 * @property {number} safeStock 安全库存
 * @property {string} shelfName 货架名称
 * @property {number} usableNum 可用库存
 * @property {number} warehouseId 仓库ID
 * @property {string} warehouseName 仓库名称
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
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findUsingGET_44Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_44
 * @summary 库存-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.warehouseName - 仓库名称
* @param {number} params.query.warehouseId - 仓库ID
* @param {string} params.query.shelfName - 货架名称
* @param {string} params.query.materialCode - 物资编码
* @param {string} params.query.materialName - 物资名称
* @param {string} params.query.materialBrand - 物资品牌
* @param {string} params.query.materialModel - 物资型号
* @param {string} params.query.materialUnit - 物资单位
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {string} params.query.storageType - 库存量 1-充足 2-紧缺 {充足=Enough-1, 紧缺=Lack-2}
* @param {string} params.query.hybrid - 物资编码或名称
 * @return {Promise<findUsingGET_44Response>}
*/
export function findUsingGET_44(params) {
  return API.get(`/inventory`, { params: { ...params.query })
}

