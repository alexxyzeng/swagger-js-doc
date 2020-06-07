/**
 * @typedef {object} checkUniqueUsingGET_2Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-building-space
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-building-space/checkUniqueUsingGET_2
 * @summary 检查空间名称或编码是否重复
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.spFloorId - 楼层ID
* @param {string} params.query.displayName - 名称
* @param {string} params.query.code - 编码
 * @return {Promise<checkUniqueUsingGET_2Response>}
*/
export function checkUniqueUsingGET_2(params) {
  return API.get(`/space/check-unique`, { params: { ...params.query })
}

