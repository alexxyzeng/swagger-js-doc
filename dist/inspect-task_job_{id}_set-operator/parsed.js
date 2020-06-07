/**
 * @typedef {object} setOperatorUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-task
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-task/setOperatorUsingPUT
 * @summary 巡检任务-工作任务-操作人员
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<setOperatorUsingPUTResponse>}
*/
export function setOperatorUsingPUT(params) {
  return API.put(`/inspect-task/job/${params.id}/set-operator`, {})
}

