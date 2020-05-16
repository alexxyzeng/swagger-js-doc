/**
 * @tags base-statistics
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-statistics/findUsingGET_54
 * @summary 工作台任务数
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.location - 查询类型 1-首页 2-工作台 {首页=Home-1, 工作台=Work-2}
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_54(params) {
  return API.get(`/stat/home`, { params: { ...params.query })
}

