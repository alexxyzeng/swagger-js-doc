/**
 * @tags workorder-pm
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-pm/woStatisticsUsingGET
 * @summary PM工单待处理数量统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[string]} params.query.types - types
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function woStatisticsUsingGET(params) {
  return API.get(`/workorder/pm/statistics`, { params: { ...params.query })
}

