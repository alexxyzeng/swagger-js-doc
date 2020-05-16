/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-app/statisticsByWaitCheckUsingGET
 * @summary 查验任务-数量统计
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function statisticsByWaitCheckUsingGET(params) {
  return API.get(`/undertake/app/wait-check/statistics`, {})
}

