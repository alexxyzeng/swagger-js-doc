/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/findUsingGET_23
 * @summary 巡检计划-提醒-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目D
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_23(params) {
  return API.get(`/inspect/remind`, { params: { ...params.query })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/createUsingPOST_16
 * @summary 新增巡检计划-提醒
 * @description 
 * @param {object} params
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
export function createUsingPOST_16(params) {
  return API.post(`/inspect/remind`, { ...params.body })
}

/**
 * @tags inspect-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-plan/deleteUsingPUT_3
 * @summary 批量删除巡检计划-提醒
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingPUT_3(params) {
  return API.put(`/inspect/remind`, { ...params.body })
}

