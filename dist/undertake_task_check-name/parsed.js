/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task/checkNameUsingGET
 * @summary 承接查验任务名称唯一性校验, 名称唯一返回true
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
export function checkNameUsingGET(params) {
  return API.get(`/undertake/task/check-name`, { ...params.body })
}

