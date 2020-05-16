/**
 * @tags facility-component
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-component/updateUsingPUT_14
 * @summary 修改设备组件
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_14(params) {
  return API.put(`/facility/component/${id}`, { ...params.body })
}

