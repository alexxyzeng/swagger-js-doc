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
 * @typedef {object} qrCode
 * @property {[fileTypesItem]} fileTypes
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} isManagement 当前用户是否是该库存所在仓库的管理员 是否枚举{否=No-0, 是=Yes-1}
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
 * @property {number} safeStock 安全库存
 * @property {string} shelfName 货架名称
 * @property {number} usableNum 可用库存
 * @property {number} warehouseId 仓库ID
 * @property {string} warehouseName 仓库名称
 *
*/

/**
 * @typedef {object} findByQrCodeUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findByQrCodeUsingGET
 * @summary 库存-扫一扫物资详情
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.qrcode - 二维码字符串
* @param {number} params.query.warehouseId - 仓库ID
 * @return {Promise<findByQrCodeUsingGETResponse>}
*/
export function findByQrCodeUsingGET(params) {
  return API.get(`/inventory/qrcode`, { params: { ...params.query })
}

