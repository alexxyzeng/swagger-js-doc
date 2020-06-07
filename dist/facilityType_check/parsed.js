/**
 * @typedef {object} checkTypeNameUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags facility-type
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/facility-type/checkTypeNameUsingGET_1
 * @summary 检验设备分类
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.typeId - 设备分类ID
* @param {number} params.query.parentId - 上级设备分类id
* @param {string} params.query.name - 设备分类名称
* @param {string} params.query.code - 设备分类编码
 * @return {Promise<checkTypeNameUsingGET_1Response>}
*/
export function checkTypeNameUsingGET_1(params) {
  return API.get(`/facilityType/check`, { params: { ...params.query })
}

