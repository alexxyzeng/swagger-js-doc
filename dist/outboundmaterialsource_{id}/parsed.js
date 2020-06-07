/**
 * @typedef {object} data
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
 * @typedef {object} findByIdUsingGET_37Response
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inventory
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inventory/findByIdUsingGET_37
 * @summary 出库物资-入库信息-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<findByIdUsingGET_37Response>}
*/
export function findByIdUsingGET_37(params) {
  return API.get(`/outboundmaterialsource/${params.id}`, {})
}

