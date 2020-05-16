/**
 * @tags service-center-demand
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand/updateDemandTypeUsingPUT
 * @summary 修改需求-需求类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.demandTypeRefId - 需求类型改关联ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateDemandTypeUsingPUT(params) {
  return API.put(`/demand/${params.id}/demand-type`, { ...params.body })
}

