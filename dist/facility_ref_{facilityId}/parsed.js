/**
 * @typedef {object} createBatchUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createBatchUsingPUTBody
 * @property {number} facilityId 设备id
 * @property {number} parentFacilityId 上级设备id
 * @property {[number]} refFacilityIds
 *
*/
/**
 * @tags facility-ref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-ref/createBatchUsingPUT
 * @summary 设备关系-关联设备
 * @description 
 * @param {object} params
 * @param {number} params.facilityId - path
 * @param {createBatchUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<createBatchUsingPUTResponse>}
*/
export function createBatchUsingPUT(params) {
  return API.put(`/facility/ref/${params.facilityId}`, { ...params.body })
}

