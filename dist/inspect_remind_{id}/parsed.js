/**
 * @typedef {object} data
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {string} createTime 创建时间
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后修改时间
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 * @property {string} remindByName 提醒人（工作组）名称
 *
*/

/**
 * @typedef {object} findByIdUsingGET_17Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_25Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_25Body
 * @property {string} action 动作：1-巡检任务开始 2-巡检任务结束（未完成） 3-巡检异常 {巡检任务开始=Start-1, 巡检任务结束（未完成）=End-2, 任务异常提醒=Exception-3}
 * @property {number} earlyTime 提前时间
 * @property {string} earlyUnit 提前单位 1-分钟 2-小时 3-天 {分钟=Min-1, 小时=Hour-2, 天=Day-3}
 * @property {number} id 唯一id
 * @property {string} isEmail 是否邮件通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isMobilePush 是否移动推送：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isOnlyExecutor 是否仅通知执行人 0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSiteMessage 是否站内信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} isSms 是否短信通知：0-否 1-是 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} planId 计划ID
 * @property {number} projectId 项目id
 * @property {number} remindBy 提醒人（工作组）
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_23Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/findByIdUsingGET_17
 * @summary 巡检计划-提醒-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_17Response>}
*/
export function findByIdUsingGET_17(params) {
  return API.get(`/inspect/remind/${params.id}`, {})
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/updateUsingPUT_25
 * @summary 修改巡检计划-提醒-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {updateUsingPUT_25Body} params.body - 请求体 undefined
 * @return {Promise<updateUsingPUT_25Response>}
*/
export function updateUsingPUT_25(params) {
  return API.put(`/inspect/remind/${params.id}`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingDELETE_23
 * @summary 删除巡检计划-提醒
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_23Response>}
*/
export function deleteUsingDELETE_23(params) {
  return API.delete(`/inspect/remind/${params.id}`, {})
}

