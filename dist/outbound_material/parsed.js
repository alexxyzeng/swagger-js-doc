/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findUsingGET_47
 * @summary 出库物资-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.inventoryId - 库存ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_47(params) {
  return API.get(`/outbound/material`, { params: { ...params.query })
}

