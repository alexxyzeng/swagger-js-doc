/**
 * @tags workorder-space
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-space/removeByIdUsingDELETE_1
 * @summary 删除工单空间位置
 * @description 
 * @param {object} params
 * @param {number} params.workorderSpaceId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function removeByIdUsingDELETE_1(params) {
  return API.delete(`/workorder-space/${params.workorderSpaceId}`, {})
}

