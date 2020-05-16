/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/findUsingGET_63
 * @summary 仓库货架-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.warehouseId - 仓库Id
* @param {string} params.query.warehouseCode - 仓库code
* @param {string} params.query.warehouseName - 仓库名称
* @param {string} params.query.code - 货架编码
* @param {string} params.query.name - 货架名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_63(params) {
  return API.get(`/warehouse/shelf`, { params: { ...params.query })
}

/**
 * @tags warehouse
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/warehouse/createUsingPOST_48
 * @summary 新增仓库货架
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.name - 货架名称
 * @param {number} params.body.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_48(params) {
  return API.post(`/warehouse/shelf`, { ...params.body })
}

