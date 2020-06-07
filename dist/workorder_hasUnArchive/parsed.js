/**
 * @typedef {object} hasUnArchiveWorkorderUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {boolean} data 数据
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags workorder
 * @link http://df-fm.v27.svc.cluster.local/swagger-ui.html#!/workorder/hasUnArchiveWorkorderUsingGET
 * @summary 是否存在未归档工单
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.orgDepartmentIds - 部门id
* @param {[number]} params.query.woServiceTypeIds - 服务类型id
* @param {[number]} params.query.woServiceTypeRefIds - 服务类型关联id
* @param {[number]} params.query.woPriorityIds - 优先级id
* @param {[number]} params.query.woSlaIds - slaId
 * @return {Promise<hasUnArchiveWorkorderUsingGETResponse>}
*/
export function hasUnArchiveWorkorderUsingGET(params) {
  return API.get(`/workorder/hasUnArchive`, { params: { ...params.query })
}

