/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/findByIdUsingGET_14
 * @summary 巡检计划-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_14(params) {
  return API.get(`/inspect-plan/${params.id}`, {})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/updateUsingPUT_22
 * @summary 修改巡检计划-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
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
export function updateUsingPUT_22(params) {
  return API.put(`/inspect-plan/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/deleteUsingDELETE_18
 * @summary 删除巡检计划
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_18(params) {
  return API.delete(`/inspect-plan/${params.id}`, {})
}

