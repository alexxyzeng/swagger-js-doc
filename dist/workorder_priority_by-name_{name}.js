/**
 * @tags workorder-priority
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-priority/findByNameUsingGET
 * @summary 查询优先级-byName
 * @description 
 * @param {object} params
 * @param {string} params.name - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByNameUsingGET(params) {
  return API.get(`/workorder/priority/by-name/${name}`, {})
}

