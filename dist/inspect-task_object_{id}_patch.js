/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/patchUsingPUT_1
 * @summary 巡检任务-工作对象-补检(app)
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function patchUsingPUT_1(params) {
  return API.put(`/inspect-task/object/${id}/patch`, { ...params.body })
}

