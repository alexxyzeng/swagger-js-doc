/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/findUsingGET_12
 * @summary 需求类型关联-全部
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - 取增量数据用
* @param {number} params.query.id - ID
* @param {number} params.query.projectId - 项目ID
* @param {string} params.query.pathName - 需求类型全称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_12(params) {
  return API.get(`/demand/type/ref/all`, { params: { ...params.query })
}

