/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/searchByFaIdUsingGET
 * @summary 查询设备关联工单
 * @description 
 * @param {object} params
 * @param {number} params.facId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchByFaIdUsingGET(params) {
  return API.get(`/workorder/by-facId/${facId}`, { params: { params.idparams.idparams.idparams.id }})
}

