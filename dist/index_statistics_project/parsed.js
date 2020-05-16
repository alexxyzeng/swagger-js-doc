/**
 * @tags index
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/index/indexStatisticsOfProjectUsingGET
 * @summary 项目-首页统计接口
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function indexStatisticsOfProjectUsingGET(params) {
  return API.get(`/index/statistics/project`, {})
}

