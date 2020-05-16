/**
 * @tags inventory
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inventory/findUsingGET_41
 * @summary 库存-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {string} params.query.warehouseName - 仓库名称
* @param {number} params.query.warehouseId - 仓库ID
* @param {string} params.query.shelfName - 货架名称
* @param {string} params.query.materialCode - 物资编码
* @param {string} params.query.materialName - 物资名称
* @param {string} params.query.materialBrand - 物资品牌
* @param {string} params.query.materialModel - 物资型号
* @param {string} params.query.materialUnit - 物资单位
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {undefined} params.query.undefined - undefined
* @param {string} params.query.storageType - 库存量 1-充足 2-紧缺 {充足=Enough-1, 紧缺=Lack-2}
* @param {string} params.query.hybrid - 物资编码或名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_41(params) {
  return API.get(`/inventory`, { params: { ...params.query })
}

