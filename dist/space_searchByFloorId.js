/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-building-space/findByFloorIdUsingGET
 * @summary 根据sp_floor_id 查找空间列
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByFloorIdUsingGET(params) {
  return API.get(, { params: { params.id }})
}

