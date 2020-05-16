/**
 * @tags facility-ref
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/facility-ref/deleteUsingDELETE_12
 * @summary 设备关系-取消关联
 * @description 
 * @param {object} params
 * @param {number} params.facilityId - path
* @param {number} params.refFacilityId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_12(params) {
  return API.delete(`/facility/ref/${params.facilityId}/${params.refFacilityId}`, {})
}

