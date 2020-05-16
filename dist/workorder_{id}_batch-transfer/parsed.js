/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/batchTransferUsingPUT
 * @summary 转单-生成多个工单
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {undefined} params.body.valueType - undefined
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchTransferUsingPUT(params) {
  return API.put(`/workorder/${params.id}/batch-transfer`, { ...params.body })
}

