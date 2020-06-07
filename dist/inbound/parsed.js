/**
 * @typedef {object} contentItem
 
 * @property {string} batchNo 批次号
 * @property {string} createTime 创建时间
 * @property {number} handler 经手人
 * @property {number} id 唯一id
 * @property {string} inboundNo 入库单号
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} storeman 保管员
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
 * @property {number} handler 经手人
 * @property {number} id 唯一id
 * @property {string} inboundNo 入库单号
 * @property {string} modifyTime 最后修改时间
 * @property {number} projectId 项目id
 * @property {string} remark 备注
 * @property {number} storeman 保管员
 * @property {number} totalAmount 总金额
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/

/**
 * @typedef {object} findUsingGET_22Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_15Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} materialsItem
 
 * @property {string} expiredDate 过期日期
 * @property {number} inNum 入库数量
 * @property {string} isIncludeTax 是否含税 是否枚举{否=No-0, 是=Yes-1}
 * @property {number} materialId 物资ID
 * @property {number} price 单价
 * @property {number} providerId 供应商ID
 * @property {number} shelfId 货架ID
 * @property {number} taxRate 税率
 *
*/

/**
 * @typedef {object} createUsingPOST_15Body
 * @property {number} handler 经手人
 * @property {[materialsItem]} materials
 * @property {string} remark 备注
 * @property {number} storeman 保管员
 * @property {number} totalNum 总数
 * @property {number} warehouseId 仓库ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_22
 * @summary 入库单-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
 * @return {Promise<findUsingGET_22Response>}
*/
export function findUsingGET_22(params) {
  return API.get(`/inbound`, { params: { ...params.query })
}

/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/createUsingPOST_15
 * @summary 新增入库单
 * @description 
 * @param {object} params
  * @param {createUsingPOST_15Body} params.body - 请求体 undefined
 * @return {Promise<createUsingPOST_15Response>}
*/
export function createUsingPOST_15(params) {
  return API.post(`/inbound`, { ...params.body })
}

