/**
 * @typedef {object} dataItem
 
 * @property {number} projectId 项目id
 * @property {string} projectName 项目名
 *
*/

/**
 * @typedef {object} findProjectsUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags energy-consumption-record-report
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/energy-consumption-record-report/findProjectsUsingGET
 * @summary 能源报表-物业点查询
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.projectName - 项目名称
 * @return {Promise<findProjectsUsingGETResponse>}
*/
export function findProjectsUsingGET(params) {
  return API.get(`/energy/consumption/record/report/statistics/projects`, { params: { ...params.query })
}

