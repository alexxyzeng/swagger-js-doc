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
 * @typedef {object} buildingsItem
 
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
 * @typedef {object} floorsItem
 
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
 * @typedef {object} spacesItem
 
 * @property {string} code 编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {string} displayName 楼层名称
 * @property {files} files 
 * @property {number} id ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spFloorId 楼层ID
 * @property {string} spaceNo 房间编号
 * @property {number} spaceType 空间类型：1、房间
 *
*/

/**
 * @typedef {object} data
 * @property {[buildingsItem]} buildings
 * @property {files} files 
 * @property {[floorsItem]} floors
 * @property {string} geoLabels 项目城市
 * @property {string} regionCode 片区编码
 * @property {string} regionName 片区名
 * @property {number} regionSort 片区排序
 * @property {[spacesItem]} spaces
 *
*/

/**
 * @typedef {object} findAllUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-building-building
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-building/findAllUsingGET
 * @summary 获取房产所有信息，包括所有楼宇、楼层和空间，随后拍需显示上传项目ID
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
* @param {number} params.query.projectId - projectId
 * @return {Promise<findAllUsingGETResponse>}
*/
export function findAllUsingGET(params) {
  return API.get(`/building/whole`, { params: { ...params.query })
}

