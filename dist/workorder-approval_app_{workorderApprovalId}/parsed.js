/**
 * @tags workorder-app,workorder-approval
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-app/searchOfAppByIdUsingGET
 * @summary 查询工单审批详情-app
 * @description 
 * @param {object} params
 * @param {number} params.workorderApprovalId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchOfAppByIdUsingGET(params) {
  return API.get(`/workorder-approval/app/${params.workorderApprovalId}`, {})
}

