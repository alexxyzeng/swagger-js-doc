/**
 * @typedef {object} checkedByTaskIdUsingPUTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags undertake-app
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/undertake-app/checkedByTaskIdUsingPUT
 * @summary 对象完成查验
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise<checkedByTaskIdUsingPUTResponse>}
*/
export function checkedByTaskIdUsingPUT(params) {
  return API.put(`/undertake/app/checked/${params.taskId}`, {})
}

