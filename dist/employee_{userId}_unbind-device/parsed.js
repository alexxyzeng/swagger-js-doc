/**
 * @typedef {object} unbindDeviceUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} unbindDeviceUsingPUTBody
 * @property {string} deviceId 设备信息
 *
*/
/**
 * @tags base-employee
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-employee/unbindDeviceUsingPUT
 * @summary 解绑设备
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {unbindDeviceUsingPUTBody} params.body - 请求体 undefined
 * @return {Promise<unbindDeviceUsingPUTResponse>}
*/
export function unbindDeviceUsingPUT(params) {
  return API.put(`/employee/${params.userId}/unbind-device`, { ...params.body })
}

