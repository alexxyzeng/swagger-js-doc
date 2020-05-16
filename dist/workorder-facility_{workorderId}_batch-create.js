/**
 * @tags workorder-facility
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-facility/batchCreateUsingPOST_1
 * @summary 创建工单对应的设备
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchCreateUsingPOST_1(params) {
  return API.post(`/workorder-facility/${workorderId}/batch-create`, { ...params.body })
}

