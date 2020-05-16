/**
 * @tags service-center-demand-type
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-type/checkTypeNameUsingGET
 * @summary 检验需求类型
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.typeId - 需求类型ID
* @param {number} params.query.parentId - 上级需求类型id
* @param {string} params.query.typeName - 需求名称
* @param {string} params.query.code - 编码
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkTypeNameUsingGET(params) {
  return API.get(`/demand/type/check`, { params: { ...params.query })
}

