/**
 * @tags workorder-priority
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-priority/findAllUsingGET_2
 * @summary 查询优先级列表
 * @description 
 * @param {object} params
 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findAllUsingGET_2(params) {
  return API.get(`/workorder/priority/search`, {})
}

