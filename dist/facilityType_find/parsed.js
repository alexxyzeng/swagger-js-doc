/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type/findUsingGET_18
 * @summary 查询设施分类
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_18(params) {
  return API.get(`/facilityType/find`, { params: { ...params.query })
}

