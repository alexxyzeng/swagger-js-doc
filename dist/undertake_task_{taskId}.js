/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-task/detailUsingGET_3
 * @summary 承接查验-任务-详情
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function detailUsingGET_3(params) {
  return API.get(`/undertake/task/${taskId}`, {})
}

/**
 * @tags undertake-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/undertake-task/updateUsingPUT_54
 * @summary 修改承接查验-任务-部分
 * @description 
 * @param {object} params
 * @param {number} params.taskId - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_54(params) {
  return API.put(`/undertake/task/${taskId}`, { ...params.body })
}

