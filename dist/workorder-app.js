/**
 * @tags workorder-app
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-app/createUsingPOST_50
 * @summary 创建工单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createUsingPOST_50(params) {
  return API.post(, { ...params.body })
}

