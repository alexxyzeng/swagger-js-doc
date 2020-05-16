/**
 * @tags index
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/index/statisticsUsingPOST
 * @summary 更新统计数据
 * @description 
 * @param {object} params
 * @param {string} params.startDate - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function statisticsUsingPOST(params) {
  return API.post(`/index/statistics/${startDate}`, {})
}

