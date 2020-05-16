/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/app-index/userUsingGET
 * @summary 获取当前登录用户信息
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function userUsingGET(params) {
  return API.get(`/user`, {})
}

