/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/inspect-site/deleteUsingDELETE_24
 * @summary 删除巡检点位-工作任务-设备
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function deleteUsingDELETE_24(params) {
  return API.delete(`/inspect-site/job/facility/${id}`, {})
}

