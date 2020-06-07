/**
 * @typedef {object} deleteUsingDELETE_16Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-ref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-ref/deleteUsingDELETE_16
 * @summary 设备关系-取消关联
 * @description 
 * @param {object} params
 * @param {number} params.facilityId - path
* @param {number} params.refFacilityId - path
 * @return {Promise<deleteUsingDELETE_16Response>}
*/
export function deleteUsingDELETE_16(params) {
  return API.delete(`/facility/ref/${params.facilityId}/${params.refFacilityId}`, {})
}

