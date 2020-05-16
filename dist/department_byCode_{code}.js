/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-department/findByCodeUsingGET
 * @summary 查找指定编码的部门
 * @description 
 * @param {object} params
 * @param {string} params.code - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByCodeUsingGET(params) {
  return API.get(`/department/byCode/${code}`, {})
}

