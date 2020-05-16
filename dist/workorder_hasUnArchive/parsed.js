/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/hasUnArchiveWorkorderUsingGET
 * @summary 是否存在未归档工单
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {[number]} params.query.orgDepartmentIds - 部门id
* @param {[number]} params.query.woServiceTypeIds - 服务类型id
* @param {[number]} params.query.woServiceTypeRefIds - 服务类型关联id
* @param {[number]} params.query.woPriorityIds - 优先级id
* @param {[number]} params.query.woSlaIds - slaId
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function hasUnArchiveWorkorderUsingGET(params) {
  return API.get(`/workorder/hasUnArchive`, { params: { ...params.query })
}

