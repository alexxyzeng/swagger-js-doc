/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findUsingGET_32
 * @summary 巡检任务-日历
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.userId - 用户ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.name - 巡检名称
* @param {number} params.query.workTeamId - 巡检人员id
* @param {string} params.query.workTeam - 巡检人员
* @param {number} params.query.siteNum - 点位数
* @param {number} params.query.exceptionNum - 异常数
* @param {number} params.query.repairNum - 报修数
* @param {number} params.query.missNum - 漏检数
* @param {number} params.query.patchNum - 补检数
* @param {string} params.query.beginDateStart - 计划开始时间开始
* @param {string} params.query.beginDateFinish - 计划开始时间结束
* @param {string} params.query.endDateStart - 计划结束时间开始
* @param {string} params.query.endDateFinish - 计划结束时间结束
* @param {[string]} params.query.status - 任务状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}
* @param {[string]} params.query.siteStatus - 点位状态 1-正常 2-异常 3-漏检 4-补检 5-报修 {正常=Normal-1, 异常=AbNormal-2, 漏检=Miss-3, 补检=Supplement-4, 报修=Repair-5}
* @param {string} params.query.beginMonth - 开始时间
* @param {string} params.query.realityBeginDateStart - 计划开始时间开始
* @param {string} params.query.realityBeginDateEnd - 计划开始时间结束
* @param {string} params.query.realityEndDateStart - 计划结束时间开始
* @param {string} params.query.realityEndDateEnd - 计划结束时间结束
* @param {string} params.query.beginDateLimit - beginDateLimit
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_32(params) {
  return API.get(`/inspect-task/calendar`, { params: { ...params.query })
}

