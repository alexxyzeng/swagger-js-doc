/**
 * @tags workorder-pm
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-pm/woStatisticsUsingGET
 * @summary PM工单待处理数量统计
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function woStatisticsUsingGET(params) {
  return API.get(, { params: { params.id }})
}

