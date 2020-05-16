/**
 * @tags base-statistics
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-statistics/findUsingGET_53
 * @summary 巡检任务数
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_53(params) {
  return API.get(`/stat/inspect`, {})
}

