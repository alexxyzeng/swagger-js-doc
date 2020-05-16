/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-component/updateUsingPUT_17
 * @summary 修改核心组件
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_17(params) {
  return API.put(`/facilityTypeComponent/${id}`, { ...params.body })
}

/**
 * @tags facility-type-component
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-component/deleteUsingDELETE_13
 * @summary 根据核心组件id删除参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_13(params) {
  return API.delete(`/facilityTypeComponent/${id}`, {})
}

