/**
 * @typedef {object} checkNameOrCodeUsingGET_1Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-position
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-position/checkNameOrCodeUsingGET_1
 * @summary 检验部门名称或编码
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.positionId - 岗位id
* @param {number} params.query.parentId - 上级岗位id
* @param {string} params.query.name - 名称
* @param {string} params.query.code - 编码
 * @return {Promise<checkNameOrCodeUsingGET_1Response>}
*/
export function checkNameOrCodeUsingGET_1(params) {
  return API.get(`/position/check`, { params: { ...params.query })
}

