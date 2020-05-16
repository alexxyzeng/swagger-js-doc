/**
 * @tags workorder-priority
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-priority/batchSaveUsingPOST
 * @summary 优先级信息批量保存
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
export function batchSaveUsingPOST(params) {
  return API.post(`/workorder/priority/batch-save`, { ...params.body })
}

