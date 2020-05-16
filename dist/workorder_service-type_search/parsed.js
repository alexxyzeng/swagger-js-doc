/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/searchUsingGET_5
 * @summary 查询服务类型列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET_5(params) {
  return API.get(`/workorder/service-type/search`, { params: { ...params.query })
}

