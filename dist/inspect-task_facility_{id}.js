/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/updateUsingPUT_30
 * @summary 修改巡检任务-设备-部分
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @param {object} params.body - 请求体
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_30(params) {
  return API.put(`/inspect-task/facility/${id}`, { ...params.body })
}

