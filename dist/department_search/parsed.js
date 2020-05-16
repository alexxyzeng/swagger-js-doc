/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-department/searchUsingGET
 * @summary 查找部门列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET(params) {
  return API.get(`/department/search`, {})
}

