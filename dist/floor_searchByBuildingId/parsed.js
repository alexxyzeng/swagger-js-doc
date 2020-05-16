/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-floor/findByBuildingIdUsingGET
 * @summary 查找楼层
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.spBuildingId - 房产ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByBuildingIdUsingGET(params) {
  return API.get(`/floor/searchByBuildingId`, { params: { ...params.query })
}

