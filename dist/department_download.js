/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-department/findByLastUpdatedTimestampUsingGET
 * @summary 部门离线数据下载
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByLastUpdatedTimestampUsingGET(params) {
  return API.get(, { params: { params.id }})
}

