/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type-ref/findAllUsingGET_3
 * @summary 查询关联服务类型
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllUsingGET_3(params) {
  return API.get(`/workorder/service-type-ref/search`, {})
}

