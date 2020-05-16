/**
 * @tags workorder-approval
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-approval/searchByIdUsingGET
 * @summary 查询工单审批详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchByIdUsingGET(params) {
  return API.get(`/workorder-approval/${id}`, {})
}

