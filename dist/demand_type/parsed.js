/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/findUsingGET_11
 * @summary 需求类型-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.tenantId - 租户ID
* @param {string} params.query.typeName - 类型名称
* @param {string} params.query.eqTypeName - 类型名称-eq
* @param {string} params.query.pathName - 全称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_11(params) {
  return API.get(`/demand/type`, { params: { ...params.query })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/createUsingPOST_5
 * @summary 新增需求类型
 * @description 
 * @param {object} params
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
export function createUsingPOST_5(params) {
  return API.post(`/demand/type`, { ...params.body })
}

/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/deleteUsingDELETE_7
 * @summary 批量删除需求类型
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
export function deleteUsingDELETE_7(params) {
  return API.delete(`/demand/type`, { ...params.body })
}

