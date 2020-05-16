/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/findUsingGET_65
 * @summary 工作组详情
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_65(params) {
  return API.get(`/work-team/${params.workTeamId}`, {})
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/updateUsingPUT_58
 * @summary 修改工作组
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {object} params.body - 请求体
 * @param {[archiverItem]} params.body.archiver - 存档
 * @param {string} params.body.description - 工作组描述
 * @param {[dispatcherItem]} params.body.dispatcher - 排程派工
 * @param {string} params.body.name - 工作组名称
 * @param {number} params.body.parentId - 上级id
 * @param {number} params.body.sort - 排序
 * @param {[supervisorItem]} params.body.supervisor - 主管
 * @param {[tracerItem]} params.body.tracer - 追踪
 * @param {[verifierItem]} params.body.verifier - 验证
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_58(params) {
  return API.put(`/work-team/${params.workTeamId}`, { ...params.body })
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/deleteUsingDELETE_58
 * @summary 删除工作组
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_58(params) {
  return API.delete(`/work-team/${params.workTeamId}`, {})
}

