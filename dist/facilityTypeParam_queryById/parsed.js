/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-param/queryByIdUsingGET_1
 * @summary 根据参数id查询参数
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryByIdUsingGET_1(params) {
  return API.get(`/facilityTypeParam/queryById`, { params: { ...params.query })
}

