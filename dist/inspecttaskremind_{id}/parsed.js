/**
 * @typedef {object} data
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-任务异常提醒 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSend 是否已经发送 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 * @property {string} remindTime 提醒时间
 * @property {number} taskId 任务ID
 *
*/

/**
 * @typedef {object} findByIdUsingGET_27Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_35Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_35Body
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-任务异常提醒 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSend 是否已经发送 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 * @property {string} remindTime 提醒时间
 * @property {number} taskId 任务ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findByIdUsingGET_27
 * @summary 巡检任务-提醒-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_27Response>}
*/
export function findByIdUsingGET_27(params) {
  return API.get(`/inspecttaskremind/${params.id}`, {})
}

/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/updateUsingPUT_35
 * @summary 修改巡检任务-提醒-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_35Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_35Response>}
*/
export function updateUsingPUT_35(params) {
  return API.put(`/inspecttaskremind/${params.id}`, { ...params.body })
}

