/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/batchCreateUsingPOST
 * @summary 创建工单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchCreateUsingPOST(params) {
  return API.post(, { ...params.body })
}

