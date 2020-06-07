/**
 * @typedef {object} contentItem
 
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
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

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
 * @typedef {object} findUsingGET_26Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_18Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_18Body
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
 * @typedef {object} deleteUsingPUT_3Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/findUsingGET_26
 * @summary 巡检计划-提醒-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目D
 * @return {Promise<findUsingGET_26Response>}
*/
export function findUsingGET_26(params) {
  return API.get(`/inspect/remind`, { params: { ...params.query })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/createUsingPOST_18
 * @summary 新增巡检计划-提醒
 * @description 
 * @param {object} params
  * @param {createUsingPOST_18Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_18Response>}
*/
export function createUsingPOST_18(params) {
  return API.post(`/inspect/remind`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-plan/deleteUsingPUT_3
 * @summary 批量删除巡检计划-提醒
 * @description 
 * @param {object} params
  * @param {[number]} params.body - 请求体 idx
 * @return {Promise<deleteUsingPUT_3Response>}
*/
export function deleteUsingPUT_3(params) {
  return API.put(`/inspect/remind`, { ...params.body })
}

