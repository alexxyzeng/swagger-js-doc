/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/findByIdUsingGET_4
 * @summary 需求-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
* @param {object} params.query - 请求查询参数
* @param {string} params.query.isClearUnreadCommonCount - isClearUnreadCommonCount
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_4(params) {
  return API.get(`/demand/${params.id}`, { params: { ...params.query })
}

