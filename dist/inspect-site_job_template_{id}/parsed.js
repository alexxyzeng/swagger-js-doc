/**
 * @tags inspect-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/inspect-site/findByIdUsingGET_20
 * @summary 巡检点位-工作任务-模板-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findByIdUsingGET_20(params) {
  return API.get(`/inspect-site/job/template/${params.id}`, {})
}

