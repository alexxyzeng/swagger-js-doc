/**
 * @tags base-project-group
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-project-group/transferProjectsUsingPOST
 * @summary 转移项目组内项目
 * @description 
 * @param {object} params
 * @param {number} params.sourceProjectGroupId - path
* @param {number} params.targetProjectGroupId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function transferProjectsUsingPOST(params) {
  return API.post(`/project-group/${sourceProjectGroupId}/transfer-to/${targetProjectGroupId}`, {})
}

