/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-floor/checkUniqueUsingGET_1
 * @summary 检查楼层名称或编码是否重复
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.spBuildingId - 房产ID
* @param {string} params.query.displayName - 名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkUniqueUsingGET_1(params) {
  return API.get(`/floor/check-unique`, { params: { ...params.query })
}

