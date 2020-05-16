/**
 * @tags base-project
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-project/userNumberUsingGET
 * @summary 获取项目已用和剩余用户数
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function userNumberUsingGET(params) {
  return API.get(`/project/${params.id}/user-number`, {})
}

