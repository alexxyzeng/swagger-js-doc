/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/findLevelOfPhotographUsingGET
 * @summary 需求类型-随手拍-层级查询
 * @description 
 * @param {object} params
 * @param {number} params.parentId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findLevelOfPhotographUsingGET(params) {
  return API.get(`/demand/type/photograph/level`, {})
}

