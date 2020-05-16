/**
 * @tags service-center-demand-process
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-process/findUsingGET_7
 * @summary 需求处理记录-列表-不分页
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.demandId - 需求ID
* @param {[number]} params.query.demandIds - 需求ID(批量查询)
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_7(params) {
  return API.get(`/demand-process/all`, { params: { ...params.query })
}

