/**
 * @tags workorder-app,workorder-detail
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-app/detailOfAppUsingGET
 * @summary 工单详情-app
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailOfAppUsingGET(params) {
  return API.get(`/workorder-detail/app/${params.workorderId}`, {})
}

