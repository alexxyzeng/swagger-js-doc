/**
 * @typedef {object} data
 
 *
*/

/**
 * @typedef {object} findByLastUpdatedTimestampUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/findByLastUpdatedTimestampUsingGET
 * @summary 部门离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise<findByLastUpdatedTimestampUsingGETResponse>}
*/
export function findByLastUpdatedTimestampUsingGET(params) {
  return API.get(`/department/download`, { params: { ...params.query })
}

