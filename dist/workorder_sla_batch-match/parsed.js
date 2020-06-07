/**
 * @typedef {object} priorityDtosItem
 
 * @property {string} priorityName 优先级名称
 * @property {number} woPriorityId 优先级id
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {string} createTime 创建时间
 * @property {number} id 由程序分配的唯一ID
 * @property {string} modifyTime 最后的修改时间
 * @property {[priorityDtosItem]} priorityDtos
 * @property {number} projectId 项目ID
 *
*/

/**
 * @typedef {object} batchMatchUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} enum
 
 *
*/

/**
 * @typedef {object} batchMatchUsingPOSTBodyItem
 
 
 
 * @property {enum} enum 
 
 *
*/
/**
 * @tags workorder-sla
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-sla/batchMatchUsingPOST
 * @summary 批量匹配sla
 * @description 
 * @param {object} params
  * @param {[batchMatchUsingPOSTBodyItem]} params.body - 请求体 dto
 * @return {Promise<batchMatchUsingPOSTResponse>}
*/
export function batchMatchUsingPOST(params) {
  return API.post(`/workorder/sla/batch-match`, { ...params.body })
}

