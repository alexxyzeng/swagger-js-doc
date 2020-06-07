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
 
 * @property {string} address 项目详细地址
 * @property {number} area 项目(建筑)面积
 * @property {string} bizType 项目业态
 * @property {string} code 项目编码
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {string} geoIds 项目城市：ID
 * @property {string} geoLabels 项目城市：显示名
 * @property {number} id 项目ID
 * @property {string} identifier 项目标识号
 * @property {string} latitude 项目所在纬度
 * @property {string} longitude 项目所在经度
 * @property {number} maxUser 授权用户数
 * @property {string} projectGroupCreateTime 项目组创建时间
 * @property {number} projectGroupId 项目组ID
 * @property {string} projectGroupName 项目组名称
 * @property {string} projectName 项目名称
 * @property {string} projectStatus 服务状态
 * @property {[string]} propertyTelephoneList
 * @property {number} refPropertyPointId 所属物业点id
 * @property {string} refPropertyPointName 所属物业点名称
 * @property {number} refSupplierId 所属物业公司ID
 * @property {string} refSupplierName 所属物业公司名称
 * @property {string} refSupplierPathName 所属物业公司全称
 * @property {string} serviceEndDate 服务结束时间
 * @property {string} serviceStartDate 服务开始时间
 * @property {number} tenantId 企业ID
 * @property {number} unreadNums 项目未读消息数
 * @property {number} usedArea 项目(使用)面积
 * @property {number} usedUser 已用用户数
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
 * @property {string} address 项目详细地址
 * @property {number} area 项目(建筑)面积
 * @property {string} bizType 项目业态
 * @property {string} code 项目编码
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {string} geoIds 项目城市：ID
 * @property {string} geoLabels 项目城市：显示名
 * @property {number} id 项目ID
 * @property {string} identifier 项目标识号
 * @property {string} latitude 项目所在纬度
 * @property {string} longitude 项目所在经度
 * @property {number} maxUser 授权用户数
 * @property {string} projectGroupCreateTime 项目组创建时间
 * @property {number} projectGroupId 项目组ID
 * @property {string} projectGroupName 项目组名称
 * @property {string} projectName 项目名称
 * @property {string} projectStatus 服务状态
 * @property {[string]} propertyTelephoneList
 * @property {number} refPropertyPointId 所属物业点id
 * @property {string} refPropertyPointName 所属物业点名称
 * @property {number} refSupplierId 所属物业公司ID
 * @property {string} refSupplierName 所属物业公司名称
 * @property {string} refSupplierPathName 所属物业公司全称
 * @property {string} serviceEndDate 服务结束时间
 * @property {string} serviceStartDate 服务开始时间
 * @property {number} tenantId 企业ID
 * @property {number} unreadNums 项目未读消息数
 * @property {number} usedArea 项目(使用)面积
 * @property {number} usedUser 已用用户数
 *
*/

/**
 * @typedef {object} searchUsingGET_3Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_37Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_37Body
 * @property {string} address 项目详细地址
 * @property {number} area 项目(建筑)面积
 * @property {string} bizType 项目业态
 * @property {string} code 项目编码
 * @property {files} files 
 * @property {string} geoIds 项目城市：ID
 * @property {string} geoLabels 项目城市：显示名
 * @property {string} identifier 项目标识号
 * @property {string} latitude 项目所在纬度
 * @property {string} longitude 项目所在经度
 * @property {number} maxUser 授权用户数
 * @property {number} projectGroupId 项目组
 * @property {string} projectName 项目名称
 * @property {[string]} propertyTelephoneList
 * @property {string} propertyTelephones 
 * @property {number} refPropertyPointId 所属物业点id
 * @property {number} refSupplierId 所属物业公司ID
 * @property {string} serviceEndDate 服务结束时间
 * @property {string} serviceStartDate 服务开始时间
 * @property {number} usedArea 项目(使用)面积
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/searchUsingGET_3
 * @summary 项目列表&搜索
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.projectName - 项目名称
* @param {string} params.query.projectGroupName - 项目组名称
* @param {string} params.query.projectStatus - 项目状态: 1、未开始 2、服务中 3、预警 4、过期 {未开始=NotStart-1, 服务中=Serving-2, 预警中=Warning-3, 已过期=Expired-4}
* @param {string} params.query.createTimeStartDate - 创建开始时间
* @param {string} params.query.createTimeEndDate - 创建结束时间
* @param {string} params.query.serviceStartDate - 服务开始时间
* @param {string} params.query.serviceEndDate - 服务结束时间
* @param {string} params.query.serviceEndDateStartDate - 服务结束时间查询开始时间
* @param {string} params.query.serviceEndDateEndDate - 服务结束时间查询结束时间
* @param {number} params.query.maxUser - 授权用户数
* @param {number} params.query.usedUser - 使用用户数
* @param {string} params.query.code - 项目编码
* @param {string} params.query.identifier - 项目标识号
* @param {string} params.query.bizType - 项目业态
* @param {number} params.query.geoId - 地理位置ID，可以是省、市、区
* @param {string} params.query.area - 项目(建筑)面积
* @param {string} params.query.usedArea - 项目(使用)面积
* @param {[number]} params.query.exIdx - 需排除项目ID
 * @return {Promise<searchUsingGET_3Response>}
*/
export function searchUsingGET_3(params) {
  return API.get(`/project`, { params: { ...params.query })
}

/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/createUsingPOST_37
 * @summary 新增项目
 * @description 
 * @param {object} params
  * @param {createUsingPOST_37Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_37Response>}
*/
export function createUsingPOST_37(params) {
  return API.post(`/project`, { ...params.body })
}

