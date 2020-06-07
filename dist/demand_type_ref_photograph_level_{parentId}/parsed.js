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
 * @typedef {object} reviewersItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} spacesItem
 
 * @property {number} spBuildingId 大楼ID
 * @property {string} spBuildingName 楼层名称
 * @property {number} spFloorId 楼层ID
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 空间ID
 * @property {string} spSpaceName 空间名称
 *
*/

/**
 * @typedef {object} spaceInfo
 * @property {[spacesItem]} spaces
 *
*/

/**
 * @typedef {object} workTeamsItem
 
 * @property {number} id 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {string} code 需求类型编码
 * @property {string} createTime 最后的修改时间
 * @property {number} deleted  是否删除：0、未删除 1、已删除
 * @property {number} demandTypeId 需求类型ID
 * @property {string} description 需求描述
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRefOrder 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isReqScope 需求位置是否必填 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotograph 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {number} parentId 父ID
 * @property {string} pathName 类型全称
 * @property {number} projectId 项目ID
 * @property {[reviewersItem]} reviewers
 * @property {number} sort 
 * @property {spaceInfo} spaceInfo 
 * @property {string} typeName 类型名称
 * @property {[workTeamsItem]} workTeams
 *
*/

/**
 * @typedef {object} findLevelOfPhotographUsingGET_3Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findLevelOfPhotographUsingGET_3
 * @summary 需求类型-随手拍-层级查询
 * @description 
 * @param {object} params
 * @param {number} params.parentId - path
 * @return {Promise<findLevelOfPhotographUsingGET_3Response>}
*/
export function findLevelOfPhotographUsingGET_3(params) {
  return API.get(`/demand/type/ref/photograph/level/${params.parentId}`, {})
}

