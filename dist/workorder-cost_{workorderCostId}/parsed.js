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
 * @typedef {object} updateUsingPUT_61Response
 * @property {number} code 业务响应状态
 * @property {data} data [object Object]
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} updateUsingPUT_61Body
 * @property {number} cost 花费
 * @property {string} description 描述
 * @property {number} id 由程序分配的唯一ID
 * @property {string} name 收费项名称
 * @property {number} projectId 项目ID
 * @property {number} woWorkorderId 工单id
 *
*/

/**
 * @typedef {object} deleteUsingDELETE_63Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-cost
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-cost/updateUsingPUT_61
 * @summary 修改费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderCostId - path
 * @param {updateUsingPUT_61Body} params.body - 请求体 [object Object]
 * @return {Promise<updateUsingPUT_61Response>}
*/
export function updateUsingPUT_61(params) {
  return API.put(`/workorder-cost/${params.workorderCostId}`, { ...params.body })
}

/**
 * @tags workorder-cost
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-cost/deleteUsingDELETE_63
 * @summary 删除费用
 * @description 
 * @param {object} params
 * @param {number} params.workorderCostId - path
 * @return {Promise<deleteUsingDELETE_63Response>}
*/
export function deleteUsingDELETE_63(params) {
  return API.delete(`/workorder-cost/${params.workorderCostId}`, {})
}

