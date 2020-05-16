/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/findUsingGET_8
 * @summary 需求跟进记录-全部
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.tenantId - 租户ID
* @param {number} params.query.projectId - 项目ID
* @param {number} params.query.id - ID
* @param {number} params.query.demandId - 需求ID
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_8(params) {
  return API.get(`/demand/track/all`, { params: { ...params.query })
}

