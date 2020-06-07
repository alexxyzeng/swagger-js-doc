/**
 * @typedef {object} contentItem
 
 * @property {number} amount 总价
 * @property {string} batchNo 入库批次号
 * @property {string} createTime 创建时间/入库时间
 * @property {string} expiredDate 过期日期
 * @property {string} handler 操作人
 * @property {number} id 唯一id
 * @property {number} inNum 入库数量
 * @property {number} inboundId 入库ID
 * @property {string} inboundNo 入库单号
 * @property {number} inventoryId 库存ID
 * @property {string} isIncludeTax 是否含税 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} materialId 物资ID
 * @property {string} modifyTime 最后修改时间
 * @property {number} price 单价
 * @property {number} projectId 项目id
 * @property {string} provider 供应商
 * @property {number} providerId 供应商ID
 * @property {string} remark 入库备注
 * @property {number} residueNum 剩余数量
 * @property {number} shelfId 货架ID
 * @property {number} taxRate 税率
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
 * @property {[contentItem]} content
 * @property {number} currentSize 当前页条数
 * @property {boolean} first 是否第一页
 * @property {boolean} last 是否最后一页
 * @property {number} pageNumber 当前页
 * @property {number} pageSize 每页条数
 * @property {pageable} pageable 
 * @property {number} totalElements 总条数
 * @property {number} totalPages 总页数
 *
*/

/**
 * @typedef {object} findUsingGET_23Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_23
 * @summary 入库物资-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.inventoryId - 库存ID
* @param {string} params.query.inventoryType - 查询类型 {全部=All-1, 当前=Present-2}
 * @return {Promise<findUsingGET_23Response>}
*/
export function findUsingGET_23(params) {
  return API.get(`/inbound/material`, { params: { ...params.query })
}

