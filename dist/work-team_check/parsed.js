/**
 * @tags work-team
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/work-team/checkTypeNameUsingGET_3
 * @summary 检验工作组
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.workTeamId - 工作组id
* @param {number} params.query.parentId - 上级工作组id
* @param {string} params.query.name - 工作组名称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkTypeNameUsingGET_3(params) {
  return API.get(`/work-team/check`, { params: { ...params.query })
}

