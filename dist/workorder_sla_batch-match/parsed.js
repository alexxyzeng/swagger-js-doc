/**
 * @tags workorder-sla
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-sla/batchMatchUsingPOST
 * @summary 批量匹配sla
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @param {undefined} params.body.type - undefined
 * @param {undefined} params.body.valueType - undefined
 * @param {undefined} params.body.required - undefined
 * @param {undefined} params.body.definitionType - undefined
 * @param {undefined} params.body.description - undefined
 * @param {undefined} params.body.name - undefined
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchMatchUsingPOST(params) {
  return API.post(`/workorder/sla/batch-match`, { ...params.body })
}

