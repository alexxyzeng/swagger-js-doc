/**
 * @tags undertake-task-facility
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/undertake-task-facility/findContentByIdUsingGET
 * @summary 承接查验-任务-对象(设备)-详情
 * @description 
 * @param {object} params
 * @param {number} params.id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findContentByIdUsingGET(params) {
  return API.get(`/undertake/task/facility/${params.id}/content`, {})
}

