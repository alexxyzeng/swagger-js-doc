/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-app/statisticsUsingGET_1
 * @summary 承接查验待处理数量统计
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[string]} params.query.types - types
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function statisticsUsingGET_1(params) {
  return API.get(`/undertake/app/statistics`, { params: { ...params.query })
}

