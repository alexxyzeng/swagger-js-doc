/**
 * @typedef {object} exceptDatesItem
 
 * @property {string} date 日期
 * @property {string} isWorkday 是否工作日 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} seq 序号
 *
*/

/**
 * @typedef {object} exceptDate
 * @property {[exceptDatesItem]} exceptDates
 *
*/

/**
 * @typedef {object} aperiodicItem
 
 * @property {string} end 结束时间
 * @property {boolean} equals 
 * @property {string} start 开始时间
 *
*/

/**
 * @typedef {object} endTime
 * @property {number} hour 
 * @property {number} minute 
 * @property {number} nano 
 * @property {number} second 
 *
*/

/**
 * @typedef {object} startTime
 * @property {number} hour 
 * @property {number} minute 
 * @property {number} nano 
 * @property {number} second 
 *
*/

/**
 * @typedef {object} intervalsItem
 
 * @property {number} endDay 结束日
 * @property {number} endIndex 结束周期（从0开始）
 * @property {endTime} endTime 
 * @property {number} startDay 开始日
 * @property {number} startIndex 开始周期（从0开始）
 * @property {startTime} startTime 
 *
*/

/**
 * @typedef {object} inspectTimeInterval
 * @property {[aperiodicItem]} aperiodic
 * @property {[intervalsItem]} intervals
 *
*/

/**
 * @typedef {object} remindsItem
 
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 *
*/

/**
 * @typedef {object} siteJobsItem
 
 * @property {string} createTime 创建时间
 * @property {number} facilityNum 设备数量
 * @property {number} id 唯一id
 * @property {string} intro 内容介绍
 * @property {string} job 工作任务
 * @property {number} jobId 点位任务ID
 * @property {string} modifyTime 最后修改时间
 * @property {string} mountSpace 安装位置
 * @property {number} projectId 项目id
 * @property {string} siteName 点位名称
 * @property {number} spBuildingId 大厦id
 * @property {number} spFloorId 楼层id
 * @property {number} spSpaceId 空间id
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {number} advanceDay 提前天数
 * @property {string} code 计划编号
 * @property {number} copyNum 已经拷贝次数
 * @property {string} createTime 创建时间
 * @property {number} cycleNum 周期数
 * @property {string} cycleType 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
 * @property {string} cycleUnit 周期单位 {天=Day-1, 周=Week-2, 月=Month-3}
 * @property {exceptDate} exceptDate 
 * @property {number} execNum 次数
 * @property {string} firstExecDate 第一次执行日期
 * @property {number} id 唯一id
 * @property {inspectTimeInterval} inspectTimeInterval 
 * @property {string} lastExecDate 最后执行日期
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 名称
 * @property {string} nextExecDate 下一次执行日期
 * @property {[remindsItem]} reminds
 * @property {string} repeatType 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
 * @property {[siteJobsItem]} siteJobs
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @property {string} useHoliday 使用节假日 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} workTeamId 工作组
 * @property {string} workTeamName 工作组名称
 * @property {string} workday 工作日
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
 * @property {number} advanceDay 提前天数
 * @property {string} code 计划编号
 * @property {number} copyNum 已经拷贝次数
 * @property {string} createTime 创建时间
 * @property {number} cycleNum 周期数
 * @property {string} cycleType 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
 * @property {string} cycleUnit 周期单位 {天=Day-1, 周=Week-2, 月=Month-3}
 * @property {exceptDate} exceptDate 
 * @property {number} execNum 次数
 * @property {string} firstExecDate 第一次执行日期
 * @property {number} id 唯一id
 * @property {inspectTimeInterval} inspectTimeInterval 
 * @property {string} lastExecDate 最后执行日期
 * @property {string} model 模式：1-不限 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} modifyTime 最后修改时间
 * @property {string} name 名称
 * @property {string} nextExecDate 下一次执行日期
 * @property {[remindsItem]} reminds
 * @property {string} repeatType 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
 * @property {[siteJobsItem]} siteJobs
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @property {string} useHoliday 使用节假日 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} workTeamId 工作组
 * @property {string} workTeamName 工作组名称
 * @property {string} workday 工作日
 *
*/

/**
 * @typedef {object} findUsingGET_25Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_17Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_17Body
 * @property {number} copyNum 已经拷贝次数
 * @property {string} cycleType 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
 * @property {exceptDate} exceptDate 
 * @property {number} execNum 次数
 * @property {string} firstExecDate 开始巡检日期 yyyy-MM-dd
 * @property {inspectTimeInterval} inspectTimeInterval 
 * @property {[number]} jobs
 * @property {string} model 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @property {string} name 名称
 * @property {number} originPlanId 拷贝来源计划ID（新增时为空）
 * @property {[remindsItem]} reminds
 * @property {string} repeatType 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
 * @property {string} status 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @property {string} useHoliday 使用节假日 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} workTeamId 巡检人员(工作组)
 * @property {string} workday 工作日(多个逗号隔开)
 *
*/

/**
 * @typedef {object} deleteUsingPUT_2Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/findUsingGET_25
 * @summary 巡检计划-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.code - 计划编号
* @param {string} params.query.name - 计划名称
* @param {string} params.query.cycleType - 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
* @param {string} params.query.repeatType - 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
* @param {string} params.query.cycleUnit - cycleUnit {天=Day-1, 周=Week-2, 月=Month-3}
* @param {string} params.query.model - 模式 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
* @param {string} params.query.status - 状态 {激活=Activate-1, 失效=Deactivate-2}
* @param {string} params.query.workTeamName - 工作组名称
 * @return {Promise<findUsingGET_25Response>}
*/
export function findUsingGET_25(params) {
  return API.get(`/inspect-plan`, { params: { ...params.query })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/createUsingPOST_17
 * @summary 新增巡检计划
 * @description 
 * @param {object} params
  * @param {createUsingPOST_17Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_17Response>}
*/
export function createUsingPOST_17(params) {
  return API.post(`/inspect-plan`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingPUT_2
 * @summary 批量删除巡检计划
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_2Response>}
*/
export function deleteUsingPUT_2(params) {
  return API.put(`/inspect-plan`, { ...params.body })
}

