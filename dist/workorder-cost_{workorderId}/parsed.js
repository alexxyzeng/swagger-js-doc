/**
 * @typedef {object} data
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
 * @typedef {object} createUsingPOST_58Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} createUsingPOST_58Body
 * @property {number} cost 花费
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} name 收费项名称
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/
/**
 * @tags workorder-cost
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-cost/createUsingPOST_58
 * @summary 新增费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {createUsingPOST_58Body} params.body - 请求体 [object Object]
 * @return {Promise<createUsingPOST_58Response>}
*/
export function createUsingPOST_58(params) {
  return API.post(`/workorder-cost/${params.workorderId}`, { ...params.body })
}

