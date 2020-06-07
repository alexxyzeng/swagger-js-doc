/**
 * @typedef {object} findAllIdUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {[number]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags inspect-template
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/inspect-template/findAllIdUsingPOST
 * @summary 全选巡检模板-内容
 * @description 
 * @param {object} params
 * @param {number} params.template-id - path
 * @return {Promise<findAllIdUsingPOSTResponse>}
*/
export function findAllIdUsingPOST(params) {
  return API.post(`/inspect-template/${params.template-id}/all-content`, {})
}

