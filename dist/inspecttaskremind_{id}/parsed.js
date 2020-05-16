/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findByIdUsingGET_25
 * @summary 巡检任务-提醒-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_25(params) {
  return API.get(`/inspecttaskremind/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/updateUsingPUT_33
 * @summary 修改巡检任务-提醒-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.action - 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-任务异常提醒 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @param {number} params.body.id - 唯一id
 * @param {string} params.body.isEmail - 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isMobilePush - 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isOnlyExecutor - 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSend - 是否已经发送 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSiteMessage - 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isSms - 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.remindBy - 提醒人（工作组）
 * @param {string} params.body.remindTime - 提醒时间
 * @param {number} params.body.taskId - 任务ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_33(params) {
  return API.put(`/inspecttaskremind/${params.id}`, { ...params.body })
}

