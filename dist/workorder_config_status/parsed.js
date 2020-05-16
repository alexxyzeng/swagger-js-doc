/**
 * @tags workorder-config
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-config/getStatusConfigUsingGET
 * @summary 查询工单状态字典项
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function getStatusConfigUsingGET(params) {
  return API.get(`/workorder/config/status`, {})
}

