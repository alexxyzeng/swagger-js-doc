/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/findUsingGET_10
 * @summary 需求类型-全部
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.id - ID
* @param {number} params.query.tenantId - 租户ID
* @param {string} params.query.typeName - 类型名称
* @param {string} params.query.eqTypeName - 类型名称-eq
* @param {string} params.query.pathName - 全称
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_10(params) {
  return API.get(`/demand/type/all`, { params: { ...params.query })
}

