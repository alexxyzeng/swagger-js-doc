/**
 * @typedef {object} deleteUsingDELETE_28Response
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-site
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingDELETE_28
 * @summary 删除巡检点位-工作任务-设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<deleteUsingDELETE_28Response>}
*/
export function deleteUsingDELETE_28(params) {
  return API.delete(`/inspect-site/job/facility/${params.id}`, {})
}

