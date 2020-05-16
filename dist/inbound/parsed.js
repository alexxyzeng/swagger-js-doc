/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findUsingGET_19
 * @summary 入库单-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_19(params) {
  return API.get(`/inbound`, { params: { ...params.query })
}

/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/createUsingPOST_13
 * @summary 新增入库单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.handler - 经手人
 * @param {[materialsItem]} params.body.materials - 物资
 * @param {string} params.body.remark - 备注
 * @param {number} params.body.storeman - 保管员
 * @param {number} params.body.totalNum - 总数
 * @param {number} params.body.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_13(params) {
  return API.post(`/inbound`, { ...params.body })
}

