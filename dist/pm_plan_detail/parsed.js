/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/pm-plan/detailUsingGET
 * @summary 查询计划详情
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.maintId - 设置id
* @param {string} params.query.planDate - 计划日期
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET(params) {
  return API.get(`/pm/plan/detail`, { params: { ...params.query })
}

