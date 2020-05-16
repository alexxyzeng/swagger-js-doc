/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/patchUsingPUT
 * @summary 巡检任务-工作任务-补检(web)
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {[contentsItem]} params.body.contents - 内容提交
 * @param {[facilitiesItem]} params.body.facilities - 设备状态
 * @param {number} params.body.patchBy - 巡检任务-补检人员ID
 * @param {string} params.body.patchEndTime - 巡检任务-补检结束时间
 * @param {string} params.body.patchStartTime - 巡检任务-补检开始时间
 * @param {number} params.body.taskJobId - 巡检任务-工作任务ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function patchUsingPUT(params) {
  return API.put(`/inspect-task/job/${params.id}/patch`, { ...params.body })
}

