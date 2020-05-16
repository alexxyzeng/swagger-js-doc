/**
 * @tags inspect-task
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-task/downloadInspectDataUsingGET
 * @summary 离线下载巡检任务
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function downloadInspectDataUsingGET(params) {
  return API.get(, { params: { params.id }})
}

