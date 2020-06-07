/**
 * @typedef {object} data
 * @property {string} image Base64后的图片
 *
*/

/**
 * @typedef {object} getCaptchaUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/app-index/getCaptchaUsingGET
 * @summary 获取验证码
 * @description 
 * @param {object} params
 
 * @return {Promise<getCaptchaUsingGETResponse>}
*/
export function getCaptchaUsingGET() {
  return API.get(`/user/captcha`, {})
}

