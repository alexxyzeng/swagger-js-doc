/**
 * @tags pm-plan
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/pm-plan/createWorkorderUsingPOST
 * @summary 手动生成工单
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function createWorkorderUsingPOST(params) {
  return API.post(, { ...params.body })
}

