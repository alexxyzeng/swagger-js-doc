/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/findByIdsUsingGET
 * @summary 查找房产列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.spBuildingIds - 房产ID列表
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdsUsingGET(params) {
  return API.get(`/building/searchByIds`, { params: { ...params.query })
}

