/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/app-index/loginUsingPOST
 * @summary 登录
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function loginUsingPOST(params) {
  return API.post(, { ...params.body })
}

