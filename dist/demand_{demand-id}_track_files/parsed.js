/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/filesUsingGET
 * @summary 查询需求跟进附件
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function filesUsingGET(params) {
  return API.get(`/demand/${params.demand-id}/track/files`, {})
}

/**
 * @tags service-center-demand-track
 * @link http://df-fm.v131.svc.cluster.local//swagger-ui.html#!/service-center-demand-track/updateUsingPUT_8
 * @summary 修改需求跟进附件
 * @description 
 * @param {object} params
 * @param {number} params.demand-id - path
 * @param {object} params.body - 请求体
 * @param {[fileTypesItem]} params.body.fileTypes - 
 * @return {Promise}<TO BE IMPLEMENTED>
*/
export function updateUsingPUT_8(params) {
  return API.put(`/demand/${params.demand-id}/track/files`, { ...params.body })
}

