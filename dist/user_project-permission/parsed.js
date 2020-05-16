/**
 * @tags app-index,base-user-login
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/app-index/userProjectPermissionUsingGET
 * @summary 获取当前登录用户项目权限
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function userProjectPermissionUsingGET(params) {
  return API.get(`/user/project-permission`, {})
}

