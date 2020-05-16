/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/setOperatorUsingPUT
 * @summary 巡检任务-工作任务-操作人员
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function setOperatorUsingPUT(params) {
  return API.put(`/inspect-task/job/${params.id}/set-operator`, {})
}

