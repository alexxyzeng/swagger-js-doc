/**
 * @tags workorder-service-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-service-type/checkTypeNameUsingGET_2
 * @summary 检验服务类型类型
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.typeId - 服务类型ID
* @param {number} params.query.parentId - 上级服务类型id
* @param {string} params.query.name - 服务类型名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkTypeNameUsingGET_2(params) {
  return API.get(`/workorder/service-type/check`, { params: { ...params.query })
}

