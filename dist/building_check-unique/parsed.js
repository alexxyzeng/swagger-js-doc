/**
 * @tags base-building-building
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-building/checkUniqueUsingGET
 * @summary 检查大厦名称或编码是否重复
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.displayName - 名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkUniqueUsingGET(params) {
  return API.get(`/building/check-unique`, { params: { ...params.query })
}

