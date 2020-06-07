/**
 * @typedef {object} checkTypeNameUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder-service-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder-service-type/checkTypeNameUsingGET_2
 * @summary 检验服务类型类型
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.typeId - 服务类型ID
* @param {number} params.query.parentId - 上级服务类型id
* @param {string} params.query.name - 服务类型名称
* @param {string} params.query.code - 编码
 * @return {Promise<checkTypeNameUsingGET_2Response>}
*/
export function checkTypeNameUsingGET_2(params) {
  return API.get(`/workorder/service-type/check`, { params: { ...params.query })
}
