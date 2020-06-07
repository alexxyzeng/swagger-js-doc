/**
 * @typedef {object} priorityDtosItem
 
 * @property {string} priorityName 优先级名称
 * @property {number} woPriorityId 优先级id
 *
*/

/**
 * @typedef {object} data
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {[priorityDtosItem]} priorityDtos
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} matchUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

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
 * @typedef {object} spaceDtosItem
 
 * @property {string} description 处理方式
 * @property {files} files 
 * @property {number} spBuildingId 大楼id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 房间id
 *
*/

/**
 * @typedef {object} matchUsingPOSTBody
 * @property {number} orgDepartmentId 部门id
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 关联服务类型id
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 4-混合 {内部报修=Internal-1, 外部报修=External-2, 计划性维护=PlannedMaintenance-3, 内部或外部报修=Mix-4}
 *
*/
/**
 * @tags workorder-sla
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-sla/matchUsingPOST
 * @summary 匹配sla
 * @description 
 * @param {object} params
  * @param {matchUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<matchUsingPOSTResponse>}
*/
export function matchUsingPOST(params) {
  return API.post(`/workorder/sla/match`, { ...params.body })
}

