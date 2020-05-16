/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/submitUsingPUT_1
 * @summary 巡检任务-工作任务-提交
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {[objectsItem]} params.body.objects - 提交对象列表
 * @param {string} params.body.realityEndTime - 实际结束时间
 * @param {string} params.body.realityStartTime - 实际开始时间
 * @param {string} params.body.status - 状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @param {number} params.body.taskJobId - 巡检任务-工作任务ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function submitUsingPUT_1(params) {
  return API.put(`/inspect-task/job/${params.id}/submit`, { ...params.body })
}

