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
 * @property {number} area 管理面积
 * @property {string} code 编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} displayName 楼层名称
 * @property {files} files 
 * @property {string} floorNo 楼层编号
 * @property {number} id ID
 * @property {number} interlayer 夹层，1：是，0：否
 * @property {number} level 楼层
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spBuildingId 房产ID
 * @property {string} timeZone 所在时区，默认东8区
 *
*/

/**
 * @typedef {object} findByIdUsingGET_14Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_22Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_22Body
 * @property {number} area 管理面积
 * @property {string} code 编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} displayName 楼层名称
 * @property {files} files 
 * @property {string} floorNo 楼层编号
 * @property {number} id ID
 * @property {number} interlayer 夹层，1：是，0：否
 * @property {number} level 楼层
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spBuildingId 房产ID
 * @property {string} timeZone 所在时区，默认东8区
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_20Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-building-floor
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-floor/findByIdUsingGET_14
 * @summary 查找楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_14Response>}
*/
export function findByIdUsingGET_14(params) {
  return API.get(`/floor/${params.id}`, {})
}

/**
 * @tags base-building-floor
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-floor/updateUsingPUT_22
 * @summary 更新楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_22Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_22Response>}
*/
export function updateUsingPUT_22(params) {
  return API.put(`/floor/${params.id}`, { ...params.body })
}

/**
 * @tags base-building-floor
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-floor/deleteUsingDELETE_20
 * @summary 删除楼层
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.id - 楼层ID
* @param {number} params.query.spBuildingId - 房产ID
 * @return {Promise<deleteUsingDELETE_20Response>}
*/
export function deleteUsingDELETE_20(params) {
  return API.delete(`/floor/${params.id}`, { params: { ...params.query })
}

