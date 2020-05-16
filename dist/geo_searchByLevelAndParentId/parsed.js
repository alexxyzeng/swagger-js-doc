/**
 * @tags base-geo
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-geo/findByLevelAndParentIdUsingGET
 * @summary 根据level parentId 得到行政区划列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.parentId - 父ID
* @param {number} params.query.Level - 层级
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLevelAndParentIdUsingGET(params) {
  return API.get(`/geo/searchByLevelAndParentId`, { params: { ...params.query })
}

