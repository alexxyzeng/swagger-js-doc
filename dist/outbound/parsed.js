/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findUsingGET_46
 * @summary 出库单-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_46(params) {
  return API.get(`/outbound`, { params: { ...params.query })
}

/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/createUsingPOST_32
 * @summary 新增出库单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {number} params.body.governor - 主管
 * @param {[materialsItem]} params.body.materials - 出库物资
 * @param {number} params.body.recipient - 领用人ID
 * @param {string} params.body.remark - 备注
 * @param {string} params.body.requisitionDate - 领料日期
 * @param {number} params.body.requisitionDepartment - 领料部门
 * @param {number} params.body.storeman - 保管员ID
 * @param {number} params.body.totalNum - 总数
 * @param {number} params.body.warehouseId - 仓库ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_32(params) {
  return API.post(`/outbound`, { ...params.body })
}

