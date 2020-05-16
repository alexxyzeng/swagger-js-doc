/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/acceptUsingPUT
 * @summary 接单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function acceptUsingPUT(params) {
  return API.put(`/workorder/${id}/accept`, { params: { params.idparams.idparams.id }})
}

