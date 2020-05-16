/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/findSlaStatusUsingGET
 * @summary 查询服务类型及是否配置sla
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findSlaStatusUsingGET(params) {
  return API.get(`/workorder/service-type/sla-status/search`, { params: { ...params.query })
}

