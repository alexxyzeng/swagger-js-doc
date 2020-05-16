/**
 * @tags workorder-priority
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-priority/batchSaveUsingPOST
 * @summary 优先级信息批量保存
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function batchSaveUsingPOST(params) {
  return API.post(, { ...params.body })
}

