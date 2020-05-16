/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findUsingGET_43
 * @summary 库存物资-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.code - 物资编码
* @param {string} params.query.name - 物资名称
* @param {string} params.query.brand - 物资品牌
* @param {string} params.query.model - 物资型号
* @param {string} params.query.unit - 物资单位
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {string} params.query.remark - 备注
* @param {string} params.query.hybrid - 编码或名称
* @param {number} params.query.warehouseId - 仓库ID,查询是否有库存时使用
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_43(params) {
  return API.get(`/material`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/createUsingPOST_29
 * @summary 新增库存物资
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.brand - 物资品牌
 * @param {string} params.body.code - 物资编码
 * @param {undefined} params.body.files - undefined
 * @param {string} params.body.model - 物资型号
 * @param {string} params.body.name - 物资名称
 * @param {number} params.body.price - 核定价格
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.safeStock - 安全库存
 * @param {string} params.body.unit - 物资单位
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_29(params) {
  return API.post(`/material`, { ...params.body })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/deleteUsingPUT_11
 * @summary 批量删除库存物资
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
export function deleteUsingPUT_11(params) {
  return API.put(`/material`, { ...params.body })
}

