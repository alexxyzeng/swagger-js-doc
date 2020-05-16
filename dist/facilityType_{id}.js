/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type/getSplicingCodeUsingGET
 * @summary 拼接设施编码
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function getSplicingCodeUsingGET(params) {
  return API.get(`/facilityType/${id}`, {})
}

/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type/updateUsingPUT_18
 * @summary 修改设施分类
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_18(params) {
  return API.put(`/facilityType/${id}`, {})
}

/**
 * @tags facility-type
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/facility-type/deleteUsingDELETE_14
 * @summary 根据id删除设施分类
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_14(params) {
  return API.delete(`/facilityType/${id}`, {})
}

