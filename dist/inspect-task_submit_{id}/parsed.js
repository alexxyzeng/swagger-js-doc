/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/submitUsingPUT
 * @summary 提交巡检任务
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.id - 巡检任务id
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {[sitesItem]} params.body.sites - 巡检任务-点位
 * @param {string} params.body.status - 状态 1-未开始 2-进行中 3-按时完成 4-延期完成 5-未巡检 {未开始=Unstart-1, 进行中=Process-2, 按时完成=Complate-3, 延期完成=DelayComplate-4, 未巡检=NoPolling-5}
 * @param {string} params.body.submit - 提交 1-未提交 2-部分提交 3-全部提交 {未提交=Nd-1, 部分提交=Part-2, 全部提交=All-3}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function submitUsingPUT(params) {
  return API.put(`/inspect-task/submit/${params.id}`, { ...params.body })
}

