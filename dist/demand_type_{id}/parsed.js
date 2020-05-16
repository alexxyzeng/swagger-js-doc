/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/findByIdUsingGET_8
 * @summary 需求类型-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_8(params) {
  return API.get(`/demand/type/${params.id}`, {})
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/updateUsingPUT_9
 * @summary 修改需求类型-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {string} params.body.code - 需求类型编码
 * @param {string} params.body.description - 需求描述
 * @param {undefined} params.body.files - undefined
 * @param {number} params.body.id - 由程序分配的唯一ID
 * @param {string} params.body.isRefOrder - 是否关联工单 是否枚举{否=No-0, 是=Yes-1}
 * @param {string} params.body.isVisiblePhotograph - 随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}
 * @param {number} params.body.parentId - 父ID
 * @param {string} params.body.pathName - 全称
 * @param {number} params.body.sort - 排序
 * @param {string} params.body.typeName - 类型名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_9(params) {
  return API.put(`/demand/type/${params.id}`, { ...params.body })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_6
 * @summary 删除需求类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_6(params) {
  return API.delete(`/demand/type/${params.id}`, {})
}

