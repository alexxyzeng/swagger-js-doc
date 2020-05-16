/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/workorderUsingGET
 * @summary 巡检任务-工单列表
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function workorderUsingGET(params) {
  return API.get(`/inspect-task/handle/workorder`, { params: { ...params.query })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/workorderUsingPOST
 * @summary 新增巡检任务-报修工单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.description - 故障描述
 * @param {string} params.body.handleResult - 异常处理结果：1-已处理、2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @param {string} params.body.handleWay - 异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @param {number} params.body.id - 唯一id
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.serviceman - 维修人员
 * @param {number} params.body.taskContentId - 任务内容ID
 * @param {number} params.body.taskId - 任务ID
 * @param {string} params.body.workorderCode - 工单编号
 * @param {number} params.body.workorderId - 工单ID
 * @param {[workordersItem]} params.body.workorders - 工单信息
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function workorderUsingPOST(params) {
  return API.post(`/inspect-task/handle/workorder`, { ...params.body })
}

