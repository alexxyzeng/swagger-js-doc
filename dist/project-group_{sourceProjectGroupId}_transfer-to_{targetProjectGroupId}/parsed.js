/**
 * @typedef {object} transferProjectsUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project-group
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project-group/transferProjectsUsingPOST
 * @summary 转移项目组内项目
 * @description 
 * @param {object} params
 * @param {number} params.sourceProjectGroupId - path
* @param {number} params.targetProjectGroupId - path
 * @return {Promise<transferProjectsUsingPOSTResponse>}
*/
export function transferProjectsUsingPOST(params) {
  return API.post(`/project-group/${params.sourceProjectGroupId}/transfer-to/${params.targetProjectGroupId}`, {})
}

