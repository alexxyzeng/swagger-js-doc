/**
 * @tags base-employee
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-employee/bindDeviceUsingPUT
 * @summary 绑定设备
 * @description 
 * @param {object} params
 * @param {number} params.userId - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.deviceId - 设备信息
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function bindDeviceUsingPUT(params) {
  return API.put(`/employee/${params.userId}/bind-device`, { ...params.body })
}

