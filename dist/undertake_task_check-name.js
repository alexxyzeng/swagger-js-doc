/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-task/checkNameUsingGET
 * @summary 承接查验任务名称唯一性校验, 名称唯一返回true
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function checkNameUsingGET(params) {
  return API.get(, { ...params.body })
}

