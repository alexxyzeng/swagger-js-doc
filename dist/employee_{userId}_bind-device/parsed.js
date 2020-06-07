/**
 * @typedef {object} bindDeviceUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} bindDeviceUsingPUTBody
 * @property {string} deviceId 设备信息
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/bindDeviceUsingPUT
 * @summary 绑定设备
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {bindDeviceUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<bindDeviceUsingPUTResponse>}
*/
export function bindDeviceUsingPUT(params) {
  return API.put(`/employee/${params.userId}/bind-device`, { ...params.body })
}

