/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/getTreeUsingGET
 * @summary 工作组列表树形结构
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function getTreeUsingGET(params) {
  return API.get(`/work-team/tree`, {})
}

