/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-position/findByIdUsingGET_36
 * @summary 查找指定ID岗位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_36(params) {
  return API.get(`/position/${params.id}`, {})
}

/**
 * @tags base-org-position
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/base-org-position/deleteUsingDELETE_36
 * @summary 删除岗位
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_36(params) {
  return API.delete(`/position/${params.id}`, {})
}

