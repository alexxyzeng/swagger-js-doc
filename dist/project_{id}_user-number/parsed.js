/**
 * @typedef {object} data
 * @property {number} leftUser 剩余用户数
 * @property {number} maxUser 授权用户数，未设置可能为空
 * @property {number} usedUser 已用用户数
 *
*/

/**
 * @typedef {object} userNumberUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-project
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-project/userNumberUsingGET
 * @summary 获取项目已用和剩余用户数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise<userNumberUsingGETResponse>}
*/
export function userNumberUsingGET(params) {
  return API.get(`/project/${params.id}/user-number`, {})
}

