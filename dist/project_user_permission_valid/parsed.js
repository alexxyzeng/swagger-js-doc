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
 * @typedef {object} findUserValidProjectPermissionUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/findUserValidProjectPermissionUsingGET
 * @summary 当前登录用户有效项目权限
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.projectName - projectName
 * @return {Promise<findUserValidProjectPermissionUsingGETResponse>}
*/
export function findUserValidProjectPermissionUsingGET(params) {
  return API.get(`/project/user/permission/valid`, { params: { ...params.query })
}

