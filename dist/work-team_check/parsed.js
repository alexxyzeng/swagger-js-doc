/**
 * @typedef {object} checkTypeNameUsingGET_3Response
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags work-team
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/work-team/checkTypeNameUsingGET_3
 * @summary 检验工作组
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.workTeamId - 工作组id
* @param {number} params.query.parentId - 上级工作组id
* @param {string} params.query.name - 工作组名称
 * @return {Promise<checkTypeNameUsingGET_3Response>}
*/
export function checkTypeNameUsingGET_3(params) {
  return API.get(`/work-team/check`, { params: { ...params.query })
}

