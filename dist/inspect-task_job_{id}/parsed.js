/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findByIdUsingGET_23
 * @summary 巡检任务-工作任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_23(params) {
  return API.get(`/inspect-task/job/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_31
 * @summary 修改巡检任务-工作任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.facilityNum - 设备数
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.intro - 内容介绍
 * @param {string} params.body.isMiss - 是否漏检 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isPatch - 是否补检 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSubmit - 是否提交 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.job - 工作任务
 * @param {number} params.body.jobId - 任务ID
 * @param {string} params.body.mark - 标签 1-正常 2-异常 {正常=Normal-1, 异常=AbNormal-2}
 * @param {number} params.body.operator - 操作人
 * @param {number} params.body.patchBy - 补检人
 * @param {string} params.body.patchByUser - 补检人
 * @param {string} params.body.patchEndTime - 补检结束时间
 * @param {string} params.body.patchStartTime - 补检开始时间
 * @param {number} params.body.projectId - 项目id
 * @param {string} params.body.realityEndTime - 实际结束时间
 * @param {string} params.body.realityStartTime - 实际开始时间
 * @param {number} params.body.siteId - 点位ID
 * @param {string} params.body.status - 状态：1-未完成 2-已完成 {未完成=Unfinished-1, 已完成=Complete-2}
 * @param {number} params.body.synthesizeNum - 综合数
 * @param {number} params.body.taskId - 任务ID
 * @param {number} params.body.taskSiteId - 任务定位ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_31(params) {
  return API.put(`/inspect-task/job/${params.id}`, { ...params.body })
}

