/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/app-index/loginUsingPOST
 * @summary 登录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {string} params.body.captchaCode - 验证码
 * @param {string} params.body.deviceToken - 设备信息
 * @param {string} params.body.loginName - 登录名
 * @param {string} params.body.password - 密码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function loginUsingPOST(params) {
  return API.post(`/user/login`, { ...params.body })
}

