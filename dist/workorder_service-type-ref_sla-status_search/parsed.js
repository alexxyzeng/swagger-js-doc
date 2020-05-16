/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type-ref/findSlaStatusUsingGET_1
 * @summary 查询关联服务类型及是否配置sla
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findSlaStatusUsingGET_1(params) {
  return API.get(`/workorder/service-type-ref/sla-status/search`, {})
}

