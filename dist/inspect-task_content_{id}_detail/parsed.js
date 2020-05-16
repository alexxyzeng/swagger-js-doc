/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-task/findDetailByIdUsingGET
 * @summary 巡检任务-内容-其他详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findDetailByIdUsingGET(params) {
  return API.get(`/inspect-task/content/${params.id}/detail`, {})
}

