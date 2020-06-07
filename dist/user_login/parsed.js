/**
 * @typedef {object} data
 * @property {string} isAdmin 是否管理员 是否枚举{否=No-0, 是=Yes-1}
 * @property {string} loginName 登录名
 * @property {string} status 状态: 0、正常；1、禁用 {失效=AccountStatusEnum-0, 激活=AccountStatusEnum-1}
 * @property {string} token token
 *
*/

/**
 * @typedef {object} loginUsingPOSTResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/

/**
 * @typedef {object} loginUsingPOSTBody
 * @property {string} captchaCode 验证码
 * @property {string} deviceToken 设备信息
 * @property {string} loginName 登录名
 * @property {string} password 密码
 *
*/
/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/loginUsingPOST
 * @summary 登录
 * @description 
 * @param {object} params
  * @param {loginUsingPOSTBody} params.body - 请求体 undefined
 * @return {Promise<loginUsingPOSTResponse>}
*/
export function loginUsingPOST(params) {
  return API.post(`/user/login`, { ...params.body })
}

