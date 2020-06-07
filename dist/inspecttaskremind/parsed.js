/**
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

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
 * @typedef {object} findUsingGET_39Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_26Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_26Body
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
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/findUsingGET_39
 * @summary 巡检任务-提醒-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
 * @return {Promise<findUsingGET_39Response>}
*/
export function findUsingGET_39(params) {
  return API.get(`/inspecttaskremind`, { params: { ...params.query })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/createUsingPOST_26
 * @summary 新增巡检任务-提醒
 * @description 
 * @param {object} params
  * @param {createUsingPOST_26Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_26Response>}
*/
export function createUsingPOST_26(params) {
  return API.post(`/inspecttaskremind`, { ...params.body })
}

