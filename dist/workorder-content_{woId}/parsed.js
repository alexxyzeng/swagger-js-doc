/**
 * @tags workorder-content
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/workorder-content/findUsingGET_66
 * @summary 查询工作内容
 * @description 
 * @param {object} params
 * @param {number} params.woId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findUsingGET_66(params) {
  return API.get(`/workorder-content/${params.woId}`, {})
}

