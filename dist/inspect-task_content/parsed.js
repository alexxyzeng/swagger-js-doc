/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findUsingGET_30
 * @summary 巡检任务-内容-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.taskObjectId - 巡检任务-工作任务-对象ID
* @param {number} params.query.taskJobId - 巡检任务-工作任务ID
* @param {string} params.query.jobType - 任务类型 1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
* @param {number} params.query.facilityId - 设备ID
* @param {string} params.query.runStatus - 设备状态 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.eqRunStatus - 设备状态-精确匹配 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
* @param {string} params.query.content - 巡检内容
* @param {string} params.query.result - 巡检结果
* @param {string} params.query.status - 状态 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
* @param {string} params.query.exceptionHandleResult - 异常处理结果 {已处理=Dispose-1, 未处理=Undispose-2}
* @param {string} params.query.exceptionHandleWay - 异常处理方式 {现状处理=Situation-1, 报修工单=Workorder-2}
* @param {string} params.query.faultDescription - 现场描述
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_30(params) {
  return API.get(`/inspect-task/content`, { params: { ...params.query })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/createUsingPOST_23
 * @summary 新增巡检任务-内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.content - 内容
 * @param {number} params.body.contentId - 内容ID
 * @param {string} params.body.defaultVal - 默认值
 * @param {string} params.body.exception - 异常
 * @param {string} params.body.exceptionHandleResult - 异常处理结果：1-已处理 2-未处理 {已处理=Dispose-1, 未处理=Undispose-2}
 * @param {string} params.body.exceptionHandleWay - 异常处理方式：1-现状处理 2-保障工单 {现状处理=Situation-1, 报修工单=Workorder-2}
 * @param {undefined} params.body.exceptions - undefined
 * @param {number} params.body.facilityId - 设备ID
 * @param {string} params.body.faultDescription - 故障描述
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.isCustom - 是否自定义 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.jobId - 工作任务ID
 * @param {string} params.body.jobType - 任务类型：1-综合巡检 2-设备巡检 {综合巡检=Synthesize-1, 设备巡检=Facility-2}
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {string} params.body.model - 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=winter-3}
 * @param {string} params.body.operationTime - 操作时间
 * @param {number} params.body.operator - 操作人
 * @param {undefined} params.body.options - undefined
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.result - 巡检结果
 * @param {string} params.body.runStatus - 运行状态：1-不限 2-在线 3-停用 {不限=Unlimit-1, 在线=Online-2, 停用=Stop-3}
 * @param {number} params.body.sort - 顺序
 * @param {string} params.body.status - 状态：1-正常 2-异常 3-漏检 4-补检 {未检=Unstart-1, 已检=Complete-2, 漏检=Miss-3, 补检=Supplement-4}
 * @param {number} params.body.taskId - 任务ID
 * @param {number} params.body.taskJobId - 任务点位工作任务ID
 * @param {number} params.body.taskObjectId - 任务对象ID
 * @param {number} params.body.templateId - 模板ID
 * @param {string} params.body.type - 类型：1-输入 2-选择 {输入=Input-1, 选择=Select-2}
 * @param {string} params.body.unit - 单位
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_23(params) {
  return API.post(`/inspect-task/content`, { ...params.body })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/deleteUsingPUT_8
 * @summary 批量删除巡检任务-内容
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_8(params) {
  return API.put(`/inspect-task/content`, { ...params.body })
}

