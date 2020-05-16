/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/findByCodeUsingGET_2
 * @summary 查询服务类型-byCode
 * @description 
 * @param {object} params
 * @param {string} params.code - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByCodeUsingGET_2(params) {
  return API.get(`/workorder/service-type/by-code/${params.code}`, {})
}

