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
 
 * @property {string} content 查验内容
 * @property {number} contentId 内容id
 * @property {string} createTime 创建时间
 * @property {files} files 
 * @property {number} id 唯一id
 * @property {string} isException 是否异常 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {number} objectId 对象id
 * @property {string} objectType 对象类型：1-位置 2-设备 {位置=Site-1, 设备=Facility-2}
 * @property {number} projectId 项目id
 * @property {string} result 查验结果，不带单位
 * @property {string} resultDesc 结果描述
 * @property {number} sort 顺序
 * @property {number} taskId 承接查验任务id
 * @property {number} templateId 模块ID
 * @property {string} templateName 模块名称
 * @property {string} unit 单位
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
 * @typedef {object} findByObjectIdUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-task-object-content
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-task-object-content/findByObjectIdUsingGET_1
 * @summary 承接查验-任务-对象-查验内容-列表
 * @description 
 * @param {object} params
 * @param {number} params.objectId - path
* @param {string} params.objectType - path
* @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise<findByObjectIdUsingGET_1Response>}
*/
export function findByObjectIdUsingGET_1(params) {
  return API.get(`/undertake/task/object/content/${params.objectId}/${params.objectType}`, { params: { ...params.query })
}

