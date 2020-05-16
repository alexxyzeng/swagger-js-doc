/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/batchTransferUsingPUT
 * @summary 转单-生成多个工单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchTransferUsingPUT(params) {
  return API.put(`/workorder/${id}/batch-transfer`, { ...params.body })
}

