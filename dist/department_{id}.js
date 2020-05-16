/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-department/findByIdUsingGET_10
 * @summary 查找指定ID部门
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_10(params) {
  return API.get(`/department/${id}`, {})
}

/**
 * @tags base-org-department
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-org-department/deleteUsingDELETE_10
 * @summary 删除部门
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_10(params) {
  return API.delete(`/department/${id}`, {})
}

