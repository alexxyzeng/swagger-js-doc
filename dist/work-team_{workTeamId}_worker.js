/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/findWorkersUsingGET
 * @summary 工作组执行人列表&搜索
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findWorkersUsingGET(params) {
  return API.get(`/work-team/${workTeamId}/worker`, { params: { params.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.idparams.id }})
}

/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/work-team/createWorkersUsingPOST
 * @summary 新增工作组执行人
 * @description 
 * @param {object} params
 * @param {number} params.workTeamId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createWorkersUsingPOST(params) {
  return API.post(`/work-team/${workTeamId}/worker`, { ...params.body })
}

