/**
 * @tags undertake-task-site
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task-site/findContentByIdUsingGET_1
 * @summary 承接查验-任务-对象(位置)-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findContentByIdUsingGET_1(params) {
  return API.get(`/undertake/task/site/${params.id}/content`, {})
}

