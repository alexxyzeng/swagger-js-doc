/**
 * @typedef {object} materialSourcesItem
 
 * @property {string} batchNo 入库批次号
 * @property {string} createTime 创建时间
 * @property {number} id 唯一id
 * @property {number} inboundId 入库ID
 * @property {number} inboundMaterialId 入库物资ID
 * @property {number} materialId 物资ID
 * @property {string} modifyTime 最后修改时间
 * @property {number} outNum 出库数量
 * @property {number} outboundId 入库ID
 * @property {number} outboundMaterialId 出库物资ID
 * @property {number} projectId 项目id
 * @property {number} shelfId 货架ID
 * @property {string} shelfName 货架名称
 *
*/

/**
 * @typedef {object} contentItem
 
 * @property {string} batchNo 批次号
 * @property {string} createTime 创建时间
 * @property {number} governor 主管
 * @property {string} governorName 主管姓名
 * @property {number} id 唯一id
 * @property {[materialSourcesItem]} materialSources
 * @property {string} modifyTime 最后修改时间
 * @property {string} outboundNo 出库单号
 * @property {number} projectId 项目id
 * @property {number} recipient 领用人
 * @property {string} recipientName 领用人姓名
 * @property {string} remark 备注
 * @property {string} requisitionDate 领料日期
 * @property {number} requisitionDepartment 领料部门
 * @property {number} storeman 保管员
 * @property {string} storemanName 保管员姓名
 * @property {number} totalAmount 总金额
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/

/**
 * @typedef {object} pageable
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {[string]} pageSort
 *
*/

/**
 * @typedef {object} data
 * @property {string} batchNo 批次号
 * @property {string} createTime 创建时间
 * @property {number} governor 主管
 * @property {string} governorName 主管姓名
 * @property {number} id 唯一id
 * @property {[materialSourcesItem]} materialSources
 * @property {string} modifyTime 最后修改时间
 * @property {string} outboundNo 出库单号
 * @property {number} projectId 项目id
 * @property {number} recipient 领用人
 * @property {string} recipientName 领用人姓名
 * @property {string} remark 备注
 * @property {string} requisitionDate 领料日期
 * @property {number} requisitionDepartment 领料部门
 * @property {number} storeman 保管员
 * @property {string} storemanName 保管员姓名
 * @property {number} totalAmount 总金额
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/

/**
 * @typedef {object} findUsingGET_49Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_35Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} materialsItem
 
 * @property {number} inventoryId 库存ID
 * @property {number} materialId 物资ID
 * @property {number} outNum 出库数量
 * @property {number} shelfId 货架ID
 * @property {number} warehouseId 仓库ID
 *
*/

/**
 * @typedef {object} createUsingPOST_35Body
 * @property {number} governor 主管
 * @property {[materialsItem]} materials
 * @property {number} recipient 领用人ID
 * @property {string} remark 备注
 * @property {string} requisitionDate 领料日期
 * @property {number} requisitionDepartment 领料部门
 * @property {number} storeman 保管员ID
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_49
 * @summary 出库单-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_49Response>}
*/
export function findUsingGET_49(params) {
  return API.get(`/outbound`, { params: { ...params.query })
}

/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/createUsingPOST_35
 * @summary 新增出库单
 * @description 
 * @param {object} params
  * @param {createUsingPOST_35Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_35Response>}
*/
export function createUsingPOST_35(params) {
  return API.post(`/outbound`, { ...params.body })
}

