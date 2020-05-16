/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findByIdUsingGET_35
 * @summary 出库物资-入库信息-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_35(params) {
  return API.get(`/outboundmaterialsource/${params.id}`, {})
}

