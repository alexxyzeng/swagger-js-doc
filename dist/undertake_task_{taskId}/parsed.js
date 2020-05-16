/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task/detailUsingGET_3
 * @summary 承接查验-任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_3(params) {
  return API.get(`/undertake/task/${params.taskId}`, {})
}

/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task/updateUsingPUT_54
 * @summary 修改承接查验-任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
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
export function updateUsingPUT_54(params) {
  return API.put(`/undertake/task/${params.taskId}`, { ...params.body })
}

