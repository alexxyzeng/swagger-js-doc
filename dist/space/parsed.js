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
 * @typedef {object} createUsingPOST_43Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_43Body
 * @property {string} code 编码
 * @property {string} displayName 空间名称，同一楼层不重复
 * @property {files} files 
 * @property {number} id 空间ID，新增时不可填写，修改时填写
 * @property {string} pathName 层级名称
 * @property {number} sort 排序
 * @property {number} spFloorId 楼层ID，不能为空
 * @property {string} spaceNo 房间编号
 * @property {number} spaceType 空间类型：1、房间，默认 1
 *
*/
/**
 * @tags base-building-space
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-space/createUsingPOST_43
 * @summary 新建空间
 * @description 
 * @param {object} params
  * @param {createUsingPOST_43Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_43Response>}
*/
export function createUsingPOST_43(params) {
  return API.post(`/space`, { ...params.body })
}

