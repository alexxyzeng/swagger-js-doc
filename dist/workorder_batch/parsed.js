/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder/batchCreateUsingPOST
 * @summary 创建工单
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
export function batchCreateUsingPOST(params) {
  return API.post(`/workorder/batch`, { ...params.body })
}

