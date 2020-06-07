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
 * @property {string} code 需求类型编码
 * @property {string} createTime 创建时间
 * @property {string} description 需求描述
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRefOrder 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotograph 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotographOfParent 上级随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} projectId 项目ID
 * @property {number} sort 排序
 * @property {string} typeName 类型名称
 *
*/

/**
 * @typedef {object} findByIdUsingGET_8Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_9Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_9Body
 * @property {string} code 需求类型编码
 * @property {string} description 需求描述
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isRefOrder 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isVisiblePhotograph 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} parentId 父ID
 * @property {string} pathName 全称
 * @property {number} sort 排序
 * @property {string} typeName 类型名称
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_6Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findByIdUsingGET_8
 * @summary 需求类型-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_8Response>}
*/
export function findByIdUsingGET_8(params) {
  return API.get(`/demand/type/${params.id}`, {})
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/updateUsingPUT_9
 * @summary 修改需求类型-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_9Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_9Response>}
*/
export function updateUsingPUT_9(params) {
  return API.put(`/demand/type/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_6
 * @summary 删除需求类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_6Response>}
*/
export function deleteUsingDELETE_6(params) {
  return API.delete(`/demand/type/${params.id}`, {})
}

