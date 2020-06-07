/**
 * @typedef {object} data
 
 *
*/

/**
 * @typedef {object} searchUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {data} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags base-org-department
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/base-org-department/searchUsingGET
 * @summary 查找部门列表
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {string} params.query.pathName - 层级名称
* @param {number} params.query.isPMC - 查询物业公司 1-仅查询物业公司
 * @return {Promise<searchUsingGETResponse>}
*/
export function searchUsingGET(params) {
  return API.get(`/department/search`, { params: { ...params.query })
}

