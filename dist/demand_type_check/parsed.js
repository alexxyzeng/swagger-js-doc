/**
 * @typedef {object} checkTypeNameUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags service-center-demand-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/service-center-demand-type/checkTypeNameUsingGET
 * @summary 检验需求类型
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.typeId - 需求类型ID
* @param {number} params.query.parentId - 上级需求类型id
* @param {string} params.query.typeName - 需求名称
* @param {string} params.query.code - 编码
 * @return {Promise<checkTypeNameUsingGETResponse>}
*/
export function checkTypeNameUsingGET(params) {
  return API.get(`/demand/type/check`, { params: { ...params.query })
}

