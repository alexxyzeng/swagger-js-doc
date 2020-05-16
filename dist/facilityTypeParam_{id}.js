/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-param/updateUsingPUT_19
 * @summary 修改设施分类对应的参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_19(params) {
  return API.put(`/facilityTypeParam/${id}`, { ...params.body })
}

/**
 * @tags facility-type-param
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type-param/deleteUsingDELETE_15
 * @summary 根据参数id删除参数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_15(params) {
  return API.delete(`/facilityTypeParam/${id}`, {})
}

