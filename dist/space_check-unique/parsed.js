/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-space/checkUniqueUsingGET_2
 * @summary 检查空间名称或编码是否重复
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.spFloorId - 楼层ID
* @param {string} params.query.displayName - 名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkUniqueUsingGET_2(params) {
  return API.get(`/space/check-unique`, { params: { ...params.query })
}

