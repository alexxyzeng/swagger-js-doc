/**
 * @tags facility-param
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-param/updateUsingPUT_16
 * @summary 修改设备参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_16(params) {
  return API.put(`/facility/param/${id}`, { ...params.body })
}

