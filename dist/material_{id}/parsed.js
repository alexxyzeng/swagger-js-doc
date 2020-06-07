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
 * @typedef {object} findByIdUsingGET_34Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_42Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_42Body
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
 * @typedef {object} deleteUsingDELETE_35Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/findByIdUsingGET_34
 * @summary 库存物资-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.warehouseId - 仓库ID
 * @return {Promise<findByIdUsingGET_34Response>}
*/
export function findByIdUsingGET_34(params) {
  return API.get(`/material/${params.id}`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/updateUsingPUT_42
 * @summary 修改库存物资-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_42Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_42Response>}
*/
export function updateUsingPUT_42(params) {
  return API.put(`/material/${params.id}`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/warehouse/deleteUsingDELETE_35
 * @summary 删除库存物资
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_35Response>}
*/
export function deleteUsingDELETE_35(params) {
  return API.delete(`/material/${params.id}`, {})
}

