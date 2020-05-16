/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findByIdUsingGET_21
 * @summary 巡检任务-内容-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_21(params) {
  return API.get(`/inspect-task/content/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_28
 * @summary 修改巡检任务-内容-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_28(params) {
  return API.put(`/inspect-task/content/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/deleteUsingDELETE_25
 * @summary 删除巡检任务-内容
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_25(params) {
  return API.delete(`/inspect-task/content/${params.id}`, {})
}

