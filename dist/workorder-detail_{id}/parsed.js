/**
 * @tags workorder-detail
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-detail/detailUsingGET_5
 * @summary 工单详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_5(params) {
  return API.get(`/workorder-detail/${params.id}`, {})
}

