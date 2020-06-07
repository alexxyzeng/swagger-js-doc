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
 * @typedef {object} findByIdUsingGET_6Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_6Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_6Body
 * @property {string} content 跟进内容
 * @property {number} demandId 需求ID
 * @property {number} id 由程序分配的唯一ID
 * @property {string} otherData 其他数据
 * @property {number} processBy 处理人
 * @property {string} processType 处理类型 {创建=Create-1, 审核=Approve-2, 更新=Update-3, 跟进=Follow-4, 建单=CreateOrder-5, 处理完成=Done-6, 验证=Confirm-7, 评价=Evaluate-8, 回访=Visit-9, 取消=Cancel-10, 转派=Redeploy-11, 追加处理=Additional-12, 评论=Comment-13}
 * @property {number} refId 关联ID
 * @property {number} refType 关联类型
 * @property {string} remark 备注
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_3Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/findByIdUsingGET_6
 * @summary 需求处理记录-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_6Response>}
*/
export function findByIdUsingGET_6(params) {
  return API.get(`/demand-process/${params.id}`, {})
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/updateUsingPUT_6
 * @summary 修改需求处理记录-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_6Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_6Response>}
*/
export function updateUsingPUT_6(params) {
  return API.put(`/demand-process/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-process
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-process/deleteUsingDELETE_3
 * @summary 删除需求处理记录
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_3Response>}
*/
export function deleteUsingDELETE_3(params) {
  return API.delete(`/demand-process/${params.id}`, {})
}

