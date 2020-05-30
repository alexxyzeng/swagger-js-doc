/**
 * @typedef {object} fileTypesItem
 * @property {string} contentType 文件ContentType
 * @property {number} fileId 文件Id
 * @property {string} fileName 文件名称
 * @property {number} fileSize 文件大小
 * @property {string} fileType 文件类型 文件类型{图片=Image, 视频=Video, 音频=Voice, 附件=Attachment}
 * @property {string} ossUrl ossUrl文件下载地址
 * @property {string} path 公共上传服务返回id，用于下载
 * @property {string} storeFileName 存储文件名，用于返回ossUrl地址
 * @property {string} url 公共服务文件下载地址
 *
*/
/**
 * @typedef {object} processFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} siteFiles
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} facilityDtosItem
 * @property {string} createTime 创建时间
 * @property {number} facFacilityId 设备id
 * @property {string} facilityCode 设备编码
 * @property {string} facilityName 设备名称
 * @property {string} facilityType 系统分类
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {string} mountSpace 位置
 * @property {string} processDesc 处理方式
 * @property {object} undefined 
 * @property {number} projectId 项目ID
 * @property {string} siteDesc 现场描述
 * @property {object} undefined 
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @typedef {object} files
 * @property {[fileTypesItem]} fileTypes
 *
*/
/**
 * @typedef {object} spaceDtosItem
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {number} projectId 项目ID
 * @property {number} spBuildingId 大楼id
 * @property {string} spBuildingName 楼宇名称
 * @property {number} spFloorId 楼层id
 * @property {string} spFloorName 楼层名称
 * @property {number} spSpaceId 房间id
 * @property {string} spSpaceName 房间名称
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @typedef {object} workordersItem
 * @property {string} appointmentEndTime 预约结束时间，从服务台同步过来
 * @property {string} appointmentStartTime 预约开始时间，从服务台同步过来
 * @property {string} description 问题描述
 * @property {[facilityDtosItem]} facilityDtos
 * @property {object} undefined 
 * @property {string} isRefFacility 是否关联设备 0-不关联 1-关联 是否枚举{否=No, 是=Yes}
 * @property {number} orgDepartmentId 部门id
 * @property {string} phone 联系电话
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User, 客户=Clientele, 其他=Other}
 * @property {string} username 报障人名称
 * @property {number} woPriorityId 优先级id
 * @property {number} woServiceTypeId 服务类型id
 * @property {number} woServiceTypeRefId 服务类型关联id, 集团版必传
 * @property {number} woSlaId slaId
 * @property {string} woType 工单类型 1-内部报修 2-外部报修 3-计划性维护 {内部报修=Internal, 外部报修=External, 计划性维护=PlannedMaintenance, 内部或外部报修=Mix}
 *
*/
/**
 * @tags app-index
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/offlineDataHasUpdateUsingGET
 * @summary 离线数据是否有更新
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.facilityLastUpdatedTimestamp - 设备信息最后一次更新时间
* @param {number} params.query.facilityTypeLastUpdatedTimestamp - 设备类型信息最后一次更新时间
* @param {number} params.query.spaceLastUpdatedTimestamp - 位置信息最后一次更新时间
* @param {number} params.query.departmentLastUpdatedTimestamp - 部门信息最后一次更新时间
* @param {number} params.query.woPriorityLastUpdatedTimestamp - 工单优先级信息最后一次更新时间
* @param {number} params.query.woSlaLastUpdatedTimestamp - 工单工作流程信息最后一次更新时间
* @param {number} params.query.serviceTypeLastUpdatedTimestamp - 服务类型信息最后一次更新时间
* @param {number} params.query.demandTypeLastUpdatedTimestamp - 需求类型信息最后一次更新时间
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function offlineDataHasUpdateUsingGET(params) {
  return API.get(`/app/index/check-offline-data-update`, { params: { ...params.query })
}

