/**
 * @tags workorder-priority
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-priority/deleteByIdUsingDELETE
 * @summary 优先级删除
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteByIdUsingDELETE(params) {
  return API.delete(`/workorder/priority/${id}`, {})
}

