/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findByIdUsingGET_22
 * @summary 巡检任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_22(params) {
  return API.get(`/inspect-task/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_29
 * @summary 修改巡检任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.exceptionNum - 异常数
 * @param {string} params.body.expectEndTime - 预计结束时间
 * @param {string} params.body.expectStartTime - 预计开始时间
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {number} params.body.missNum - 漏检数
 * @param {string} params.body.name - 巡检名称
 * @param {number} params.body.patchNum - 补检数
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.realityEndTime - 实际结束时间
 * @param {string} params.body.realityStartTime - 实际开始时间
 * @param {number} params.body.repairNum - 报修数
 * @param {number} params.body.siteNum - 点位数
 * @param {string} params.body.state - 状态 1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @param {string} params.body.status - 状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}
 * @param {string} params.body.submit - 提交 1-未提交 2-部分提交 3-全部提交 {未提交=Nd-1, 部分提交=Part-2, 全部提交=All-3}
 * @param {number} params.body.workTeamId - 巡检人员
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_29(params) {
  return API.put(`/inspect-task/${params.id}`, { ...params.body })
}

