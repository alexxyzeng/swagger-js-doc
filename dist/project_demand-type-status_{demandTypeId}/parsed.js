/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/searchDemandTypeStatusUsingGET
 * @summary 查询项目同步的需求类型的状态
 * @description 
 * @param {object} params
 * @param {number} params.demandTypeId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchDemandTypeStatusUsingGET(params) {
  return API.get(`/project/demand-type-status/${params.demandTypeId}`, {})
}

