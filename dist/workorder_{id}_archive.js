/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/archiveUsingPUT
 * @summary 存档
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function archiveUsingPUT(params) {
  return API.put(`/workorder/${id}/archive`, {})
}

