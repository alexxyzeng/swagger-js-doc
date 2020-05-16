/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-project-group/updateUsingPUT_44
 * @summary 修改项目组
 * @description 
 * @param {object} params
 * @param {number} params.projectGroupId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_44(params) {
  return API.put(`/project-group/${projectGroupId}`, { ...params.body })
}

/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-project-group/deleteUsingDELETE_38
 * @summary 删除项目组
 * @description 
 * @param {object} params
 * @param {number} params.projectGroupId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_38(params) {
  return API.delete(`/project-group/${projectGroupId}`, {})
}

