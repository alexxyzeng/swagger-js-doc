/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamicbind/findByIdUsingGET_37
 * @summary 活码绑定表-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_37(params) {
  return API.get(`/qrcodedynamicbind/${params.id}`, {})
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamicbind/updateUsingPUT_45
 * @summary 修改活码绑定表-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {number} params.body.bindId - 绑定ID
 * @param {string} params.body.bindType - 绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.qrcodeDynamicId - 活码ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_45(params) {
  return API.put(`/qrcodedynamicbind/${params.id}`, { ...params.body })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamicbind/deleteUsingDELETE_40
 * @summary 删除活码绑定表
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_40(params) {
  return API.delete(`/qrcodedynamicbind/${params.id}`, {})
}

