/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/situationUsingPOST
 * @summary 新增巡检任务-现状处理
 * @description 
 * @param {object} params
  * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function situationUsingPOST(params) {
  return API.post(, { ...params.body })
}

