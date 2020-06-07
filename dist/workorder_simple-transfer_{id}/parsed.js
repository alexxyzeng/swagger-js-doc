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
 
 * @property {string} createTime 创建时间
 * @property {string} description 处理方式
 * @property {files} files 
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
 * @typedef {object} data
 * @property {string} description 问题描述
 * @property {files} files 
 * @property {string} oriId 原工单Id
 * @property {string} phone 手机号
 * @property {[spaceDtosItem]} spaceDtos
 * @property {number} userId 用户/客户ID
 * @property {string} userType 用户类型 1-用户 2-客户 9-填写 {员工=User-1, 客户=Clientele-2, 其他=Other-9}
 * @property {string} username 报修人名称
 *
*/

/**
 * @typedef {object} simpleOfTransferUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/simpleOfTransferUsingGET
 * @summary 转单信息查询
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<simpleOfTransferUsingGETResponse>}
*/
export function simpleOfTransferUsingGET(params) {
  return API.get(`/workorder/simple-transfer/${params.id}`, {})
}

