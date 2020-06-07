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
 * @typedef {object} dataItem
 
 * @property {string} address 详细地址
 * @property {string} assetNo 资产编号
 * @property {number} buildArea 建筑面积
 * @property {string} buildingNo 楼栋
 * @property {string} buildingUnit 单元
 * @property {string} code 编码
 * @property {string} completionTime 
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} developer 开发商
 * @property {string} displayName 房产名称
 * @property {string} displayNameEn 房产英文名
 * @property {number} endFloor 结束楼层
 * @property {files} files 
 * @property {number} floorArea 楼层标准面积
 * @property {number} id ID
 * @property {number} latitude 纬度
 * @property {number} longitude 经度
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 路径名称
 * @property {string} remark 备注
 * @property {number} roomRate 得房率
 * @property {number} sort 排序
 * @property {number} startFloor 起始楼层
 * @property {number} struct 房产结构
 * @property {string} timeZone 所在时区
 *
*/

/**
 * @typedef {object} findByIdsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-building-building
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-building/findByIdsUsingGET
 * @summary 查找房产列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.spBuildingIds - 房产ID列表
 * @return {Promise<findByIdsUsingGETResponse>}
*/
export function findByIdsUsingGET(params) {
  return API.get(`/building/searchByIds`, { params: { ...params.query })
}

