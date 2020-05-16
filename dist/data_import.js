/**
 * @tags base-data-import
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/base-data-import/executeUsingPOST
 * @summary 执行操作
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function executeUsingPOST(params) {
  return API.post(, { ...params.body })
}

