/**
 * @tags service-center-demand-evaluate
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-evaluate/findByIdUsingGET_5
 * @summary 需求评价（回访）-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_5(params) {
  return API.get(`/demand/evaluate/${params.id}`, {})
}

