/**
 * @tags workorder-space
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-space/updateUsingPUT_61
 * @summary 更新工单空间位置
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
* @param {number} params.workorderSpaceId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_61(params) {
  return API.put(`/workorder-space/${workorderId}/${workorderSpaceId}`, { ...params.body })
}

