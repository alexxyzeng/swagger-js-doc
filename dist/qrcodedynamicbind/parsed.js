/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamicbind/findUsingGET_49
 * @summary 活码绑定表-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_49(params) {
  return API.get(`/qrcodedynamicbind`, { params: { ...params.query })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamicbind/createUsingPOST_36
 * @summary 新增活码绑定表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.bindId - 绑定ID
 * @param {string} params.body.bindType - 绑定类型 {巡检点位=InSite-1, 设备=Fac-2, 库存=Inventory-3}
 * @param {number} params.body.projectId - 项目id
 * @param {number} params.body.qrcodeDynamicId - 活码ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_36(params) {
  return API.post(`/qrcodedynamicbind`, { ...params.body })
}

/**
 * @tags qrcodedynamicbind
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/qrcodedynamicbind/deleteUsingDELETE_39
 * @summary 批量删除活码绑定表
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {number} params.body.valueType - 
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_39(params) {
  return API.delete(`/qrcodedynamicbind`, { ...params.body })
}

