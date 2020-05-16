/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type/relationUsingGET_1
 * @summary 查询设施分类是否被预防性维护和巡检关联
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function relationUsingGET_1(params) {
  return API.get(`/facilityType/relation`, { params: { ...params.query })
}

