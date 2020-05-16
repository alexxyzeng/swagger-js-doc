/**
 * @tags facility-ref
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-ref/createBatchUsingPUT
 * @summary 设备关系-关联设备
 * @description 
 * @param {object} params
 * @param {number} params.facilityId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createBatchUsingPUT(params) {
  return API.put(`/facility/ref/${facilityId}`, { ...params.body })
}

