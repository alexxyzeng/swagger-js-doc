/**
 * @tags base-building-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-building-space/findByFloorIdUsingGET
 * @summary 根据sp_floor_id 查找空间列
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.spFloorId - 楼层ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByFloorIdUsingGET(params) {
  return API.get(`/space/searchByFloorId`, { params: { ...params.query })
}

