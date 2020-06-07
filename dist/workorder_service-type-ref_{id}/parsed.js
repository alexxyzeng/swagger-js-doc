/**
 * @typedef {object} deleteUsingDELETE_48Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-service-type-ref
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type-ref/deleteUsingDELETE_48
 * @summary 删除关联服务类型
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_48Response>}
*/
export function deleteUsingDELETE_48(params) {
  return API.delete(`/workorder/service-type-ref/${params.id}`, {})
}

