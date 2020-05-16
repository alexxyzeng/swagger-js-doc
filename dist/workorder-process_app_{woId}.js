/**
 * @tags workorder-process
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder-process/searchOfAppUsingGET
 * @summary 查询工单记录
 * @description 
 * @param {object} params
 * @param {number} params.woId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function searchOfAppUsingGET(params) {
  return API.get(`/workorder-process/app/${woId}`, {})
}

