/**
 * @tags base-dict
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-dict/findUnitUsingGET
 * @summary 公共字典查询
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUnitUsingGET(params) {
  return API.get(, { params: { params.id }})
}

