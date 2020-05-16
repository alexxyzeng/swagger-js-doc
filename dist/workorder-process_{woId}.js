/**
 * @tags workorder-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-process/searchUsingGET_10
 * @summary 查询工单历史记录
 * @description 
 * @param {object} params
 * @param {number} params.woId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchUsingGET_10(params) {
  return API.get(`/workorder-process/${woId}`, {})
}

