/**
 * @typedef {object} contentItem
 
 * @property {string} createTime 创建时间
 * @property {string} description 故障描述
 * @property {string} handleResult 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @property {string} handleWay 异常处理方式：现状处理、保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @property {number} id 唯一id
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} serviceman 维修人员
 * @property {number} taskContentId 任务内容ID
 * @property {number} taskId 任务ID
 * @property {string} workorderCode 工单编号
 * @property {number} workorderId 工单ID
 * @property {string} workorderStatus 工单状态 {创建=Create-1, 待派工=WaitWork-2, 待抢单=WaitGrabOrder-3, 待接单=WaitOrder-4, 待完成=WaitFinish-5, 已暂停=Pause-6, 待料中=WaitMaterial-8, 已完成=Finish-9, 已终止=Over-10, 待转单=PendingOrder-11, 待存档=NoArchived-12, 已存档=Archived-13, 待派工_临时=TempNoWork-14, 待接单_退单_临时=TempNoOrder_Refund-151, 暂停_退单_临时=TempPause_Refund-152, 待完成_退单_临时=TempNoFinish_Refund-153, 待完成_临时=TempNoFinish-16, 已完成待验证_临时=TempFinish-17, 待存档_临时=TempNoArchive-18, 异常=Error-19, 待审批=NoApproval-20}
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
 * @typedef {object} findUsingGET_41Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findUsingGET_41
 * @summary 巡检任务-处理记录-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskId - 巡检任务ID
* @param {string} params.query.jobType - 任务类型 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {number} params.query.facilityId - 设备ID
* @param {number} params.query.taskJobId - 巡检任务-工作任务ID
* @param {number} params.query.taskObjectId - 巡检任务-工作对象ID
* @param {number} params.query.taskContentId - 巡检任务内容ID
 * @return {Promise<findUsingGET_41Response>}
*/
export function findUsingGET_41(params) {
  return API.get(`/inspect-task/handle`, { params: { ...params.query })
}

