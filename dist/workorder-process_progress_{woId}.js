/**
 * @tags workorder-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-process/findProgressUsingGET
 * @summary 查询工单处理进度条
 * @description 
 * @param {object} params
 * @param {number} params.woId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findProgressUsingGET(params) {
  return API.get(`/workorder-process/progress/${woId}`, {})
}

