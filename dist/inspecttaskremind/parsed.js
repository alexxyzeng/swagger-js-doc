/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findUsingGET_36
 * @summary 巡检任务-提醒-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_36(params) {
  return API.get(`/inspecttaskremind`, { params: { ...params.query })
}

/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/createUsingPOST_24
 * @summary 新增巡检任务-提醒
 * @description 
 * @param {object} params
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
export function createUsingPOST_24(params) {
  return API.post(`/inspecttaskremind`, { ...params.body })
}

