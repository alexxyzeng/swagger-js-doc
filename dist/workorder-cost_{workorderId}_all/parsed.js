/**
 * @typedef {object} dataItem
 
 * @property {number} cost 花费
 * @property {string} createTime 创建时间
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} isToolCost 是否工具同步费用 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} modifyTime 最后的修改时间
 * @property {string} name 收费项名称
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} findAllUsingGET_6Response
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-cost
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-cost/findAllUsingGET_6
 * @summary 查询费用列表
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise<findAllUsingGET_6Response>}
*/
export function findAllUsingGET_6(params) {
  return API.get(`/workorder-cost/${params.workorderId}/all`, {})
}

