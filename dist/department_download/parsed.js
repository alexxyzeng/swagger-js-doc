/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-department/findByLastUpdatedTimestampUsingGET
 * @summary 部门离线数据下载
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
* @param {number} params.query.lastUpdatedTimestamp - lastUpdatedTimestamp
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLastUpdatedTimestampUsingGET(params) {
  return API.get(`/department/download`, { params: { ...params.query })
}

