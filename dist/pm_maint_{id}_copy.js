/**
 * @tags pm
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm/copyUsingGET
 * @summary 拷贝设置
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function copyUsingGET(params) {
  return API.get(`/pm/maint/${id}/copy`, {})
}

