/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-type-component/queryByIdUsingGET
 * @summary 根据核心组件id查询
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - id
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function queryByIdUsingGET(params) {
  return API.get(`/facilityTypeComponent/queryById`, { params: { ...params.query })
}

