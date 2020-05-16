/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/submitUsingPUT_2
 * @summary 巡检任务-工作对象-提交
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {[contentsItem]} params.body.contents - 提交内容列表
 * @param {string} params.body.facilityStatus - 设备状态：1-在用 2-停用 {在用=Run-1, 停用=Stop-2}
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {string} params.body.patchEndTime - 补检结束时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.body.patchStartTime - 补检开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.body.realityStartTime - 实际开始时间 yyyy-MM-dd HH:mm:ss
 * @param {string} params.body.status - 状态：1-未检 2-已检 {未检=Unstart-1, 已检=Complete-2}
 * @param {number} params.body.taskObjectId - 任务对象ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function submitUsingPUT_2(params) {
  return API.put(`/inspect-task/object/${params.id}/submit`, { ...params.body })
}

