/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/findUsingGET_65
 * @summary 工作组详情
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_65(params) {
  return API.get(`/work-team/${workTeamId}`, {})
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/updateUsingPUT_58
 * @summary 修改工作组
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_58(params) {
  return API.put(`/work-team/${workTeamId}`, { ...params.body })
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/deleteUsingDELETE_58
 * @summary 删除工作组
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_58(params) {
  return API.delete(`/work-team/${workTeamId}`, {})
}

