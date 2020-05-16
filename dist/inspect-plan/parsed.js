/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/findUsingGET_22
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
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_22(params) {
  return API.get(`/inspect-plan`, { params: { ...params.query })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/createUsingPOST_15
 * @summary 新增巡检计划
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.copyNum - 已经拷贝次数
 * @param {string} params.body.cycleType - 周期类型：1-周期 2-非周期 {周期=Cycle-1, 非周期=Acyclic-2}
 * @param {undefined} params.body.exceptDate - undefined
 * @param {number} params.body.execNum - 次数
 * @param {string} params.body.firstExecDate - 开始巡检日期 yyyy-MM-dd
 * @param {undefined} params.body.inspectTimeInterval - undefined
 * @param {[jobsItem]} params.body.jobs - 点位列表
 * @param {string} params.body.model - 模式：1-常规 2-夏季 3-冬季 {常规=Normal-1, 夏季=Summer-2, 冬季=Winter-3}
 * @param {string} params.body.name - 名称
 * @param {number} params.body.originPlanId - 拷贝来源计划ID（新增时为空）
 * @param {[remindsItem]} params.body.reminds - 任务提醒
 * @param {string} params.body.repeatType - 重复周期：1-次/天 2-天/次 3-次/周 4-周/次 5-次/月 6-月/次 {次/天=TimesDay-1, 天/次=DayTimes-2, 次/周=TimesWeek-3, 周/次=WeekTimes-4, 次/月=TimesMonth-5, 月/次=MonthTimes-6}
 * @param {string} params.body.status - 状态：1-激活 2-失效 {激活=Activate-1, 失效=Deactivate-2}
 * @param {string} params.body.useHoliday - 使用节假日 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.workTeamId - 巡检人员(工作组)
 * @param {string} params.body.workday - 工作日(多个逗号隔开)
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_15(params) {
  return API.post(`/inspect-plan`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/deleteUsingPUT_2
 * @summary 批量删除巡检计划
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
export function deleteUsingPUT_2(params) {
  return API.put(`/inspect-plan`, { ...params.body })
}

