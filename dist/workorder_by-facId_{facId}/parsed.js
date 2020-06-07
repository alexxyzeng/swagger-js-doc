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
 * @typedef {object} pmExtend
 * @property {number} cycle 维保周期
 * @property {string} cycleUnit 周期单位 {天=Day-1, 周=Week-2, 月=Month-3, 季=Quarter-4, 年=Year-5}
 * @property {string} effectDesc 影响
 * @property {files} files 
 * @property {string} isScanQRCode 是否通过扫码访问设备 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} maintName 维保名称
 * @property {number} maintPlanId 维保任务ID
 * @property {string} woPriority 优先级
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {boolean} approval 
 * @property {string} code 工单编码
 * @property {string} createTime 创建时间
 * @property {string} cycle 维保周期
 * @property {string} execEmployeeNames 执行员工名称
 * @property {number} id 工单id
 * @property {number} isApproval 是否在审批中
 * @property {string} orderDesc 工单描述
 * @property {pmExtend} pmExtend 
 * @property {string} processDesc 处理方式
 * @property {string} siteDesc 现场描述
 * @property {string} status 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
 * @property {string} statusValue 工单状态描述
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
 * @typedef {object} searchByFaIdUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/searchByFaIdUsingGET
 * @summary 查询设备关联工单
 * @description 
 * @param {object} params
 * @param {number} params.facId - path
* @param {object} params.query - 请求查询参数
* @param {[string]} params.query.woTypes - woTypes
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
 * @return {Promise<searchByFaIdUsingGETResponse>}
*/
export function searchByFaIdUsingGET(params) {
  return API.get(`/workorder/by-facId/${params.facId}`, { params: { ...params.query })
}

