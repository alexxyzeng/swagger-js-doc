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
 
 * @property {string} content 跟进内容
 * @property {string} createTime 创建时间
 * @property {number} creator 创建者
 * @property {string} creatorName 创建人名称
 * @property {number} demandId 需求ID
 * @property {files} files 
 * @property {number} id 由程序分配的唯一ID
 * @property {string} otherData 其他数据
 * @property {number} processBy 处理人ID
 * @property {string} processType 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @property {string} processTypeDesc 处理类型描述
 * @property {string} processorAvatarUrl 处理人头像地址
 * @property {string} processorName 处理人名称
 * @property {number} projectId 项目ID
 * @property {number} refId 关联ID
 * @property {number} refType 关联类型
 * @property {string} remark 备注
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
 * @typedef {object} findUsingGET_6Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_2Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findUsingGET_6
 * @summary 需求处理记录-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.demandId - 需求ID
* @param {[number]} params.query.demandIds - 需求ID(批量查询)
 * @return {Promise<findUsingGET_6Response>}
*/
export function findUsingGET_6(params) {
  return API.get(`/demand-process`, { params: { ...params.query })
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/deleteUsingDELETE_2
 * @summary 批量删除需求处理记录
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingDELETE_2Response>}
*/
export function deleteUsingDELETE_2(params) {
  return API.delete(`/demand-process`, { ...params.body })
}

