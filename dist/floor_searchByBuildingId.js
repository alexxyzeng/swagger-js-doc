/**
 * @tags base-building-floor
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-floor/findByBuildingIdUsingGET
 * @summary 查找楼层
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByBuildingIdUsingGET(params) {
  return API.get(, { params: { params.id }})
}

