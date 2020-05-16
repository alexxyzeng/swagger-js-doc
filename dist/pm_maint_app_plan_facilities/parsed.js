/**
 * @tags pm-app
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-app/findFacilitiesByTypeIdsUsingGET
 * @summary 维保对象-设备
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.facilityTypeIds - facilityTypeIds
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findFacilitiesByTypeIdsUsingGET(params) {
  return API.get(`/pm/maint/app/plan/facilities`, { params: { ...params.query })
}

