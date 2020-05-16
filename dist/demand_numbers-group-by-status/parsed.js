/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/numbersGroupByStatusUsingGET
 * @summary 获取各个状态对应的需求数量
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function numbersGroupByStatusUsingGET(params) {
  return API.get(`/demand/numbers-group-by-status`, {})
}

