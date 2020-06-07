/**
 * @typedef {object} contentItem
 
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
 * @typedef {object} findUsingGET_51Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findUsingGET_51
 * @summary 出库物资-入库信息-列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.pageNumber - 获取当前页
* @param {number} params.query.pageSize - 每页显示的数量
* @param {string} params.query.pageSort - 排序参数,格式为: 属性名-[asc|desc].默认排序为递增.可传递多个排序参数(逗号分割).
* @param {number} params.query.id - ID
 * @return {Promise<findUsingGET_51Response>}
*/
export function findUsingGET_51(params) {
  return API.get(`/outboundmaterialsource`, { params: { ...params.query })
}

