/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/findByIdUsingGET_37
 * @summary 活码绑定表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_37(params) {
  return API.get(`/qrcodedynamicbind/${id}`, {})
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/updateUsingPUT_45
 * @summary 修改活码绑定表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_45(params) {
  return API.put(`/qrcodedynamicbind/${id}`, { ...params.body })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/qrcodedynamicbind/deleteUsingDELETE_40
 * @summary 删除活码绑定表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_40(params) {
  return API.delete(`/qrcodedynamicbind/${id}`, {})
}

