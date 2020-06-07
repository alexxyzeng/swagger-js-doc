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
 * @typedef {object} contentItem
 
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
 * @typedef {object} findUsingGET_13Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_9Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findUsingGET_13
 * @summary 需求类型关联-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.lastUpdatedTimestamp - 取增量数据用
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.pathName - 需求类型全称
 * @return {Promise<findUsingGET_13Response>}
*/
export function findUsingGET_13(params) {
  return API.get(`/demand/type/ref`, { params: { ...params.query })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_9
 * @summary 批量删除需求类型关联
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_9Response>}
*/
export function deleteUsingDELETE_9(params) {
  return API.delete(`/demand/type/ref`, { ...params.body })
}

