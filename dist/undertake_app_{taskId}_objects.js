/**
 * @tags undertake-app
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-app/findObjectsByTaskIdUsingGET
 * @summary 查验对象列表
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findObjectsByTaskIdUsingGET(params) {
  return API.get(`/undertake/app/${taskId}/objects`, {})
}

