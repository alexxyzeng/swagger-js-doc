/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/findByIdUsingGET_15
 * @summary 巡检计划-提醒-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_15(params) {
  return API.get(`/inspect/remind/${params.id}`, {})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/updateUsingPUT_23
 * @summary 修改巡检计划-提醒-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.action - 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @param {number} params.body.earlyTime - 提前时间
 * @param {string} params.body.earlyUnit - 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.isEmail - 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isMobilePush - 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isOnlyExecutor - 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSiteMessage - 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSms - 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.planId - 计划ID
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.remindBy - 提醒人（工作组）
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_23(params) {
  return API.put(`/inspect/remind/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/deleteUsingDELETE_19
 * @summary 删除巡检计划-提醒
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_19(params) {
  return API.delete(`/inspect/remind/${params.id}`, {})
}

