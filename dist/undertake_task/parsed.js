/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task/findUsingGET_59
 * @summary 承接查验-任务-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.name - 查验任务名称
* @param {string} params.query.takeFrom - 交验方
* @param {string} params.query.takeOver - 接管方
* @param {string} params.query.checker - 查验人
* @param {string} params.query.accepter - 验收人
* @param {string} params.query.startStartTime - 开始时间-区间开始
* @param {string} params.query.startEndTime - 开始时间-区间结束
* @param {string} params.query.completedStartTime - 完成时间-区间开始
* @param {string} params.query.completedEndTime - 完成时间-区间结束
* @param {string} params.query.isException - 是否异常 pc使用 是否枚举{否=No-0, 是=Yes-1}
* @param {[string]} params.query.status - 状态 {已创建=Created-1, 处理中=InProgress-2, 已完成=Completed-3, 已验证=Acceptance-4}
* @param {[string]} params.query.objectStatusSet - 对象状态 app使用 {正常=Normal-1, 异常=Except-2, 整改=Rectification-3}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_59(params) {
  return API.get(`/undertake/task`, { params: { ...params.query })
}

/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task/createUsingPOST_45
 * @summary 新增承接查验-任务
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {[accepterListItem]} params.body.accepterList - 验收人员
 * @param {[checkerListItem]} params.body.checkerList - 查验人员
 * @param {string} params.body.description - 查验说明
 * @param {[facilityListItem]} params.body.facilityList - 查验对象(设备)
 * @param {string} params.body.name - 任务名称
 * @param {number} params.body.priorityId - 优先级id
 * @param {[siteListItem]} params.body.siteList - 查验对象(位置)
 * @param {number} params.body.slaId - 流程设置id
 * @param {string} params.body.startTime - 开始时间
 * @param {string} params.body.takeFrom - 交验方
 * @param {string} params.body.takeOver - 接管方
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_45(params) {
  return API.post(`/undertake/task`, { ...params.body })
}

