/**
 * @tags workorder
 * @link http://df-fm.v131.svc.cluster.local/swagger-ui.html#!/workorder/findWorkerUsingGET
 * @summary 查询未派工执行人
 * @description 
 * @param {object} params
 * @param {number} params.workorderId - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function findWorkerUsingGET(params) {
  return API.get(`/workorder/${workorderId}/worker`, {})
}

